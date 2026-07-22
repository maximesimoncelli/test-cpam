FROM node:24.18-alpine AS build

WORKDIR /home/node/build
RUN chown -R node:node /home/node
USER node

COPY --chown=node:node ./package.json ./tsconfig.json ./package-lock.json ./
RUN npm ci

COPY --chown=node:node ./apps/ui ./apps/ui
COPY --chown=node:node ./libs/pattatras ./libs/pattatras
RUN npm run app:build

FROM build as app

WORKDIR /home/node/app
USER node

COPY --chown=node:node --from=build /home/node/build/dist ./
COPY --chown=node:node --from=build /home/node/build/package.json ./package.json

RUN npm install --save-dev http-server

CMD ["./node_modules/.bin/http-server", "ui"]
