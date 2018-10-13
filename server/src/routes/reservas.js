//módulos
const express = require('express');
const reservaRouter = express.Router();
const authService = require('../services/auth.service');

//model
const Reserva = require('../models/reservas');

//constroller
const ReservaController = require('../controllers/reservas');

//rotas
reservaRouter.get('/', authService.authorize, ReservaController.get);
reservaRouter.post('/', authService.authorize, ReservaController.create);
reservaRouter.get('/:id', authService.authorize, ReservaController.getById);

module.exports = reservaRouter;