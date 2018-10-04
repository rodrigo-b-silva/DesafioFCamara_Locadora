//módulos
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//importa a configuração do banco de dados
const database = require('../config/database');

//importa o arquivo raiz de rotas
const routes = require('./routes');


let configureExpress = () => {
    app.use(bodyParser.json());
    app.use('/', routes);
    return app;
}

module.exports = () => database.connect().then(configureExpress);