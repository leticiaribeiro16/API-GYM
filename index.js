const express = require('express');
const app = express()
const port = process.env.PORT || 3000 //para que a porta seja a que o servidor direcionar, porque é aleatória. daí o servidor coloca automaticamente o código da porta no const

const treinos = require("./src/treinos/treinos.json");

app.get('/treinos', (req, res) => {
    return res.json(treinos)
});

app.listen(port, () => {
    console.log('adm ta on')
});