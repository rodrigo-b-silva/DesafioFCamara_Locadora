//módulos
const express = require('express');
const userRouter = express.Router();
const authService = require('../services/auth.service');

//model
const User = require('../models/users');

//importa e instancia o UserController
const userController = require('../controllers/users');

//rotas
userRouter.get('/', authService.authorize, userController.get);
userRouter.post('/', userController.create);
userRouter.get('/:id', authService.authorize, userController.getById);
userRouter.put('/:id', authService.isAdmin, userController.update);
userRouter.delete('/:id', authService.isAdmin, userController.remove);
userRouter.post('/authenticate', userController.authenticate);
userRouter.post('/refresh-token', authService.authorize, userController.refreshToken);

module.exports = userRouter;