//módulos
const express = require('express');
const reservaRouter = express.Router();

//model
const Reserva = require('../models/reservas');

//constroller
const ReservaController = require('../controllers/reservas');
const reservaController = new ReservaController(Reserva);

//rotas
reservaRouter.get('/', (req, res) => {
    reservaController.get(req, res);
});

reservaRouter.post('/', (req, res) => {
    reservaController.create(req, res);
});

reservaRouter.get('/:id', (req, res) => {
    reservaController.getById(req, res);
});

reservaRouter.put('/:id', (req, res) => {
    reservaController.update(req, res);
});

reservaRouter.delete('/:id', (req, res) => {
    reservaController.remove(req, res);
});

module.exports = reservaRouter;