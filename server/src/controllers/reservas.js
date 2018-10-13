const authService = require('../services/auth.service');
const Reserva = require('../models/reservas');
//const UserValidator = require('../validators/fluent-validator');

exports.get = async(req, res) => {
    try{
        const reservas = await Reserva.find({})
            .populate('user', 'name email')
            .populate('filme', 'nome genero');
        res.status(200).send(reservas);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.getById = async(req, res) => {
    try{
        const reserva = await Reserva.findOne({ _id: req.params.id });
        res.status(200).send(reserva);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.create = async(req, res) => {
    try{
        //recupera e decodifica o token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authService.decodeToken(token);

        const newReserva = new Reserva({
            user: data.id,
            filme: req.body.filme,
            tempoMin: req.body.tempoMin,
            tempoMax: req.body.tempoMax
        });
        
        await newReserva.save();
        res.status(200).send(newReserva);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

// exports.update = async(req, res) => {
//     try{
//         await User.findByIdAndUpdate( req.params.id, {
//             $set: {
//                 nome: req.body.nome,
//                 email: req.body.email,
//                 password: req.body.password,
//                 rg: req.body.rg,
//                 endereco: req.body.endereco,
//                 telefone: req.body.telefone,
//                 admin: req.body.admin
//             }
//         });
//         res.status(200).send({ message: 'Usuário atualizado'});
//     }
//     catch(e){
//         res.status(500).send({ message: 'Erro ao processar a requisição' });
//     }
    
// };

// exports.remove = async(req, res) => {
//     try{
//         await User.findByIdAndRemove( req.params.id );
//         res.status(200).send({ message: 'usuário excluido'});
//     }
//     catch(e){
//         res.status(500).send({ message: 'Erro ao processar a requisição' });
//     }
// };
