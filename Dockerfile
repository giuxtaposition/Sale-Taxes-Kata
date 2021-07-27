FROM node:16

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app
RUN yarn test

ENTRYPOINT ["yarn", "start"] 