const express = require('express');
const filmesRouter = express.Router();
const authService = require('../services/auth.service');

//model
const Filme = require('../models/filmes');

//controller
const filmeController = require('../controllers/filmes');

//rotas
filmesRouter.get('/', filmeController.get);
filmesRouter.post('/', authService.isAdmin, filmeController.create);
filmesRouter.get('/:id', filmeController.getById);
filmesRouter.get('/ator/:ator', filmeController.getByActors);
filmesRouter.put('/:id', authService.isAdmin, filmeController.update);
filmesRouter.delete('/:id', authService.isAdmin, filmeController.remove);

module.exports = filmesRouter;