# Usa la imagen oficial de Node.js como base
FROM node:20

# Establece el directorio de trabajo en /usr/src/app
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./
COPY server.js ./
COPY views ./views
COPY public ./public

# Instala las dependencias
RUN npm install

# Expone el puerto en el que corre tu aplicación
EXPOSE 3000

# Comando para ejecutar tu aplicación cuando el contenedor se inicie
CMD ["node", "server.js"]
