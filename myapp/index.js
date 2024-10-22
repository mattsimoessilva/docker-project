const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World sei oque nao sei porque exatamente mas sei que é bem legal n~~ao e mesmo? ham!');
});

// Inicia o servidor e exporta a instância
const server = app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

// Exporta o app e o server para testes
module.exports = { app, server };
