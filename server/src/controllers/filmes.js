class FilmeController{

    constructor(Filme){
        this.Filme = Filme;
    }

    get(req, res){
        return this.Filme.find({})
            .then(filme => res.send(filme))
            .catch(err => res.status(404).send(err.message));
    }

    getById(req, res){
        return this.Filme.find({ 
            _id: req.params.id 
        })
            .then(filme => res.send(filme))
            .catch(err => res.status(400).send(err.message));
    }

    create(req, res){
        const newFilme = new this.Filme(req.body);
        return newFilme.save()
            .then(filme => res.send(filme))
            .catch(err => res.status(400).send(err.message));
    }

    update(req, res){
        const Filme = new this.Filme({
            _id: req.params.id,
            nome: req.body.nome,
            genero: req.body.genero,
            atores: req.body.atores,
            lancamento: req.body.lancamento,
            duracao: req.body.duracao,
            diretor: req.body.diretor,
            sinopse: req.body.sinopse,
            quantidade: req.body.quantidade
        })
        return this.Filme.update({ _id: req.params.id }, Filme)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(400).send(err.message));
    }

    remove(req, res){
        return this.Filme.remove({ _id: req.params.id })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(400).send(err.message));
    }

}

module.exports = FilmeController;