FROM node:alpine
LABEL version="1.0.0"
LABEL author="Parables Boltnoel <https://github.com/parables>"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g pnpm
COPY . .
VOLUME [ "/." ]
EXPOSE 8080
CMD [ "sh" ]