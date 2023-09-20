FROM mhart/alpine-node:16 as build
WORKDIR /app
RUN npm i -g pnpm
COPY package*.json ./
RUN npm ci --no-audit --prefer-offline
COPY . /app
RUN npm run build
FROM nginx:1.21.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]