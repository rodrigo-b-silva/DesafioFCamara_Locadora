//módulos
const express = require('express');
const router = express.Router();

//define rota raiz
router.get('/', (req, res) => {
    res.send('Hello World');
});

//importa rotas de user
const usersRoute = require('./users');
//defina rotas para /user
router.use('/users', usersRoute);

module.exports = router;