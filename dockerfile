FROM node:24.18-alpine AS build

WORKDIR /home/node/build
RUN npm install -g http-server

COPY ./package.json ./tsconfig.json ./
COPY ./apps/ui ./apps/ui
COPY ./libs/pattatras ./libs/pattatras

RUN npm i
RUN npm run app:build

FROM build as app

WORKDIR /home/node/app

COPY ./dist ./
COPY ./package.json ./package.json

CMD [ "http-server", "ui" ]
