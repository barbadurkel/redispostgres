FROM node:10

WORKDIR /usr/app

COPY ./package.json .

RUN npm install

# Copy remaining files to workdir
COPY ./ ./


EXPOSE 3000

CMD ["npm", "test"]