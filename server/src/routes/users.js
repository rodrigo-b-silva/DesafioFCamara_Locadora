//módulos
const express = require('express');
const userRouter = express.Router();

//model
const User = require('../models/users');

//importa e instancia o UserController
const UserController = require('../controllers/users');
const userController = new UserController(User);

userRouter.get('/', (req, res) => {
    userController.get(req, res);
});

userRouter.post('/', (req, res) => {
    userController.create(req, res);
});

userRouter.get('/:id', (req, res) => {
    userController.getById(req, res);
});

userRouter.put('/:id', (req, res) => {
    userController.update(req, res);
});

userRouter.delete('/:id', (req, res) => {
    userController.remove(req, res);
});

module.exports = userRouter;