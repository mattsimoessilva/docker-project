# Use a imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json para instalar as dependências
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o código da aplicação para o contêiner
COPY . .

# Defina a porta que a aplicação irá expor
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
