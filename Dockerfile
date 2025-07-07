FROM node:22-alpine AS build
WORKDIR /src/app

COPY package*.json ./
# COPY my-project/package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

# 5. Build (if needed) or just serve
# (if you already exported Next.js frontend to out/)
# No need to build frontend again
 
# 6. Start the NestJS server
CMD ["npm", "run", "start:dev"]





# # Stage 1: Build the application
# FROM node:20-alpine AS build
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Create the production image
# FROM node:20-alpine AS production
# WORKDIR /usr/src/app
# COPY --from=build /usr/src/app/node_modules ./node_modules
# COPY --from=build /usr/src/app/dist ./dist
# EXPOSE 3000
# CMD ["node", "dist/main"]