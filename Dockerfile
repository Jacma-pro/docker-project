FROM node:24-alpine
WORKDIR /app
COPY package.json .
EXPOSE 5173
RUN npm install
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]