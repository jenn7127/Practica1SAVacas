FROM node:12
WORKDIR /appSA
ADD . /appSA
RUN npm install
EXPOSE 3000
CMD npm start