class ReservaController{

    constructor(Filmes){
        this.Filmes = Filmes;
    }

    get(req, res){
        return this.Filmes.find({})
            .then(reservas => res.send(reservas))
            .catch(err => res.status(404).send(err.message));
    }

    getById(req, res){
        return this.Filmes.find({
            _id: req.params.id
        })
            .then(reserva => res.send(reserva))
            .catch(err => res.status(400).send(err.message));
    }

    create(req, res){
        const newReserva = new this.Filmes(req.body)
            newReserva.save()
            .then(reserva => res.send(reserva))
            .catch(err => res.status(400).send(err.message));
    }

    update(req, res){
        res.send('put');
    }

    remove(req, res){
        return this.Filmes.remove({ _id: req.params.id })
            .then(() => res.sendStatus(204))
            .catch(err => res.status(400).send(err.message));
    }

}

module.exports = ReservaController;