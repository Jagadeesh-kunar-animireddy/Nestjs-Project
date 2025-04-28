FROM node:20-alpine
WORKDIR /src/app

COPY package*.json ./
COPY my-project/package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["node", "dist/main.js"]