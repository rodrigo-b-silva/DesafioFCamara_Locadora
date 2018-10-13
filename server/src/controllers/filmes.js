const authService = require('../services/auth.service');
const Filme = require('../models/filmes');
const FilmesValidator = require('../validators/fluent-validator');

exports.get = async(req, res) => {
    try{
        const filmes = await Filme.find({})
        res.status(200).send(filmes);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.getById = async(req, res) => {
    try{
        const filme = await Filme.findOne({ _id: req.params.id });
        res.status(200).send(filme);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.getByActors = async(req, res) => {
    try{
        const filmes = await Filme.find({ atores: req.params.ator });
        res.status(200).send(filmes);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};

exports.create = async(req, res) => {
    const filmesValidator = new FilmesValidator();
    filmesValidator.hasMinLen(req.body.nome, 2, 'O nome do filme deve ter pelo menos 2 caracteres');
    filmesValidator.isRequired(req.body.atores, 'Deve conter pelo menos o nome de um autor');

    //verifica se os dados são validos
    if(!filmesValidator.isValid()){
        res.status(400).send(filmesValidator.errors()).end();
        return;
    }

    try{
        const newFilme = new Filme({
            nome: req.body.nome,
            genero: req.body.genero,
            atores: req.body.atores,
            lancamento: req.body.lancamento,
            duracao: req.body.duracao,
            diretor: req.body.diretor,
            sinopse: req.body.sinopse,
            quantidade: req.body.quantidade,
            preco: req.body.preco
        });
        await newFilme.save();
        res.status(200).send(newFilme);
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao aprocessar a requisição' });
    }
};

exports.update = async(req, res) => {
    try{
        await Filme.findByIdAndUpdate( req.params.id, {
            $set: {
                nome: req.body.nome,
                genero: req.body.genero,
                atores: req.body.atores,
                lancamento: req.body.lancamento,
                duracao: req.body.duracao,
                diretor: req.body.diretor,
                sinopse: req.body.sinopse,
                quantidade: req.body.quantidade
            }
        });
        res.status(200).send({ message: 'Filme atualizado'});
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
    
};

exports.remove = async(req, res) => {
    try{
        await Filme.findByIdAndRemove( req.params.id );
        res.status(200).send({ message: 'Filme excluido'});
    }
    catch(e){
        res.status(500).send({ message: 'Erro ao processar a requisição' });
    }
};
