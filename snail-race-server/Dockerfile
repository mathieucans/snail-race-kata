FROM node:alpine

WORKDIR /simple-race-server

COPY package*.json ./
COPY dist ./dist

RUN npm install --omit=dev

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
