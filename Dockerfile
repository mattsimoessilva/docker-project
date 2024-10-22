# Use uma imagem base do Node.js
FROM node:14

# Crie um diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json da pasta my-app
COPY my-app/package*.json ./
RUN npm install

# Copie o restante do código da aplicação da pasta my-app
COPY my-app/ ./

# Exponha a porta que a aplicação irá utilizar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]

