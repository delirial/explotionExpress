FROM mongo:latest
MAINTAINER Delirial elarcadeldelirio@gmail.com

LABEL version="1.0"
LABEL description="API backend for testing \
and developed on Node+Express+Mongo. \
--- Mongo Stack ----"

ENV MONGO_INITDB_ROOT_USERNAME wizard
ENV MONGO_INITDB_ROOT_PASSWORD 1234
ENV MONGO_INITDB_DATABASE movies


COPY mongo-init.js /docker-entrypoint-initdb.d/
EXPOSE 27017


