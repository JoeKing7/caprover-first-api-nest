FROM node:16.20.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm install && npm cache clean --force
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 4000
EXPOSE 4000
CMD [ "npm", "start:prod" ]"