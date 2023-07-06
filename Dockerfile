# FROM docker/whalesay:latest
# LABEL Name=mytestapp Version=0.0.1
# RUN apt-get -y update && apt-get install -y fortunes
# CMD ["sh", "-c", "/usr/games/fortune -a | cowsay"]

FROM node:alpine
# set the working directory
WORKDIR /app
# copy package files
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# copy everything to /app directory
COPY ./ ./
# run the app
CMD ["npm", "start"]



# FROM nginx:alpine
# COPY build/ /usr/share/nginx/html