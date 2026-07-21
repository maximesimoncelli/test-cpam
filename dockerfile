FROM node:24.18 AS build

WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node

COPY ./package.json ./tsconfig.json ./
COPY ./src ./src
COPY ./types ./types

ENV NODE_ENV=production

RUN npm i
RUN npm run build

ENTRYPOINT [ "npm", "start" ]
