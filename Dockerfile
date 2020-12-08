FROM node:12
WORKDIR /practica_sa_vacas
ADD . /practica_sa_vacas
RUN npm install
EXPOSE 3000
CMD npm start