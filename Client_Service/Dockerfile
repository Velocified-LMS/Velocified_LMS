FROM node:20-alpine3.15 as builder

RUN apk add --no-cache python3 make g++

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
