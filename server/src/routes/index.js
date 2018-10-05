//módulos
const express = require('express');
const router = express.Router();

//define rota raiz
router.get('/', (req, res) => {
    res.send('Hello World');
});

//importa e define rotas de user
const usersRoute = require('./users');
router.use('/users', usersRoute);

//importa e define rotas de filmes
const filmeRouter = require('./filmes');
router.use('/filmes', filmeRouter);

//importa e define rotas de reservas
const reservaRouter = require('./reservas');
router.use('/reservas', reservaRouter);

module.exports = router;