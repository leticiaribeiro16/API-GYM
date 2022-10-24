const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express'); 
const swaggerDocument = require('./swagger.json');

const treinos = require("./src/treinos/treinos.json"); //api

var options = {
    swaggerOptions: {
      validatorUrl: null
    },
    explorer: true,
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

app.get('/terms', (req, res) => {
    return res.json({
        message: "Termos de Serviço",
    });
});

app.get('/treinos', (req, res) => {
    return res.json(treinos)
});

app.listen(port, () => {
    console.log('adm ta on')
});