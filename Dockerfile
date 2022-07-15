FROM node:12

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN npm install -g ember-cli
