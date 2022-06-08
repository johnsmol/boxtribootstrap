# using alpine for smallest docker image
FROM node:14.17
WORKDIR /app/frontend

COPY package*.json yarn.* ./
ENV GENERATE_SOURCEMAP=false

RUN yarn install

CMD ["yarn", "start"]