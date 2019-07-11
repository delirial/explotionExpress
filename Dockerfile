FROM node:10-alpine

MAINTAINER Delirial elarcadeldelirio@gmail.com
LABEL version="1.0"
LABEL description="API backend for testing \
and developed on Node+Express+Mongo. \
--- Mongo Stack ----"
#tini is an small init for containers
RUN apk add --no-cache bash tini
RUN addgroup mongodb
RUN adduser -SDH mongodb -G mongodb
RUN apk add --no-cache mongodb

ENV MONGO_INITDB_ROOT_USERNAME wizard
ENV MONGO_INITDB_ROOT_PASSWORD 1234
ENV MONGO_INITDB_DATABASE movies

COPY mongo-init.js .

#Node config project
WORKDIR /user/src/app
COPY package*.json ./
#dev mode
#RUN npm i
RUN npm ci --only=production
COPY . .
RUN npm run build:local
# process
EXPOSE 27017
# http
EXPOSE 28017
# node
EXPOSE 3000
#TODO maybe add the data folder?
VOLUME /data/db
#Need to started script executed
CMD ["npm","run","start:database"]


