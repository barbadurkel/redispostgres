FROM node:10

# create App directory
WORKDIR /usr/src/app

# install app dependencies
# a wildcard is used to ensure both package.json and package-lock.json are copied where available

COPY ./package*.json ./

RUN npm install

# bundle app source code inside Docker image

COPY . .

EXPOSE 3000

CMD ["npm", "test"]