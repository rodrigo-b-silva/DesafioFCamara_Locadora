const authService = require('../services/auth.service');
const User = require('../models/users');
const UserValidator = require('../validators/fluent-validator');
const md5 = require('md5');

exports.get = async(req, res) => {
    try{
        const users = await User.find({})
        res.status(200).send(users);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.getById = async(req, res) => {
    try{
        const user = await User.findOne({ _id: req.params.id });
        res.status(200).send(user);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.create = async(req, res) => {
    const userValidator = new UserValidator();
    userValidator.hasMinLen(req.body.nome, 3, 'O nome do usuario deve ter pelo menos 3 caracteres');
    userValidator.isEmail(req.body.email, 'Você deve inserir um e-mail válido');

    //verifica se os dados são validos
    if(!userValidator.isValid()){
        res.status(400).send(userValidator.errors()).end();
        return;
    }

    try{
        const newUser = new User({
            nome: req.body.nome,
            email: req.body.email,
            password: md5( req.body.password + global.SALT_KEY ),
            rg: req.body.rg,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            roles: ['user']
        });
        await newUser.save();
        res.status(200).send(newUser);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao aprocessar a requisição' });
    }
};

exports.update = async(req, res) => {
    try{
        await User.findByIdAndUpdate( req.params.id, {
            $set: {
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password,
                rg: req.body.rg,
                endereco: req.body.endereco,
                telefone: req.body.telefone,
                admin: req.body.admin
            }
        });
        res.status(200).send({ message: 'Usuário atualizado'});
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
    
};

exports.remove = async(req, res) => {
    try{
        await User.findByIdAndRemove( req.params.id );
        res.status(200).send({ message: 'usuário excluido'});
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.authenticate = async(req, res) => {
    try{
        const userAuth = await User.findOne({
            email: req.body.email,
            password: md5( req.body.password + global.SALT_KEY )
        });

        if(!userAuth){
            res.status(404).send({message: 'Usuário ou senha inválidos'});
            return;
        }

        const token = await authService.generateToken({
            id: userAuth._id,
            nome: userAuth.nome,
            email: userAuth.email,
            roles: userAuth.roles
        });

        res.status(201).send({
            token: token,
            data: {
                nome: userAuth.nome,
                email: userAuth.email
            }
        });

    }
    catch(e){
        res.status(400).send({ message: 'Falha ao processar a requisição'});
    }

}

exports.refreshToken = async(req, res) => {
    try{
        //recupera e decodifica o token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const user = await User.findById(data.id);

        if(!user){
            res.status(404).send({message: 'Usuário não foi encontrado'});
            return;
        }

        const tokenNovo = await authService.generateToken({
            id: user._id,
            nome: user.nome,
            email: user.email,
            roles: user.roles
        });

        res.status(201).send({
            token: tokenNovo,
            data: {
                nome: user.nome,
                email: user.email
            }
        });

    }
    catch(e){
        res.status(400).send({ message: 'Falha ao processar a requisição'});
    }

}