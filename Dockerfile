FROM node:16-alpine3.17
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
EXPOSE 3000
CMD npm run dev

