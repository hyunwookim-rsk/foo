FROM node:16

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN npm install -g ember-cli

RUN mkdir /app
WORKDIR /app

COPY ./index.js ./package-lock.json ./package.json ./apidoc.json ./