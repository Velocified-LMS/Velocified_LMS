FROM node:20.8.1-alpine

WORKDIR /

COPY package*.json ./

# RUN apk update

# RUN apk --no-cache add --virtual builds-deps build-base python3
# RUN apk add --no-cache build-base
# RUN apk add --no-cache make gcc g++ python3
RUN npm install
# RUN npm rebuild bcrypt -build-from-source
# RUN apk del make gcc g++ python
# RUN npm install

# RUN npm uninstall bcrypt
# RUN npm install bcrypt --build-from-source

# RUN npm install --save bcrypt-nodejs && npm uninstall --save bcrypt

COPY . .

EXPOSE 3100

CMD [ "node", "server.js" ]
