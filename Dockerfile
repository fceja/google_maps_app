FROM node:alpine

WORKDIR /home/workspace/react_app

COPY /public ./public
COPY /src ./src
COPY config-overrides.js .
COPY package.json .
COPY tsconfig.json .
COPY webpack.config.ts .

RUN npm install

CMD tail -f /dev/null && npm start