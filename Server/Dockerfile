FROM node:20-alpine

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3100

CMD [ "npm", "run", "prod" ]
