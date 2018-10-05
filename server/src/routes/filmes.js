const express = require('express');
const filmesRouter = express.Router();

//model
const Filme = require('../models/filmes');

//controller
const FilmeController = require('../controllers/filmes');
const filmeController = new FilmeController(Filme);

//rotas
filmesRouter.get('/', (req, res) => {
    filmeController.get(req, res);
})

filmesRouter.post('/', (req, res) => {
    filmeController.create(req, res);
})

filmesRouter.get('/:id', (req, res) => {
    filmeController.getById(req, res);
})

filmesRouter.put('/:id', (req, res) => {
    filmeController.update(req, res);
})

filmesRouter.delete('/:id', (req, res) => {
    filmeController.remove(req, res);
})

module.exports = filmesRouter;