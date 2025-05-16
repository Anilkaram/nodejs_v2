FROM node:21-alpine3.18
WORKDIR /project
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]