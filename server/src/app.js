//módulos
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//importa a configuração do banco de dados
const database = require('../config/database');
const connectionDB = () => mongoose.connect( database.connectionString );

//habilita maior limimte bas requisições JSON para envio de imagem
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
})); 
    
//habilita CORS - permissões de acesso ao end-point da API de lugares externos (ex: angular)
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
});

//importa o arquivo raiz de rotas
const routes = require('./routes');

//models
const User = require('./models/users');
const Filme = require('./models/filmes');
const Reserva = require('./models/reservas');

let configureExpress = () => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use('/', routes);
    return app;
}

module.exports = () => connectionDB().then(configureExpress);