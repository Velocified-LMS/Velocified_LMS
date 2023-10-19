FROM node:20

WORKDIR /

COPY package*.json ./

RUN npm install

RUN npm uninstall bcrypt

RUN npm install bcrypt

COPY . .

EXPOSE 3100

CMD [ "node", "server.js" ]
