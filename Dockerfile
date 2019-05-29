FROM node:10-alpine

WORKDIR /abb

COPY ./package.json .
COPY ./packages/server/package.json ./packages/server/
COPY ./packages/common/package.json ./packages/common/

RUN yarn install --production

COPY ./packages/server/dist ./packages/server/dist
COPY ./packages/common/dist ./packages/common/dist
COPY ./packages/server/.env ./packages/server/.env
COPY ./packages/server/.env.example ./packages/server/.env.example
COPY ./ormconfig.json .

WORKDIR /abb/packages/server

ENV NODE_ENV production

EXPOSE 4000

CMD ["node", "dist/index.js"]