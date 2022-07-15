FROM node:16
RUN npm i -g pm2@5.2.0
RUN mkdir /app
WORKDIR /app
COPY ./* /app
RUN npm ci

CMD ["pm2-runtime", "index.js"]