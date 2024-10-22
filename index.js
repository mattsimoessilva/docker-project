const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Inicia o servidor e exporta a instância
const server = app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

// Exporta o app e o server para testes
module.exports = { app, server };


