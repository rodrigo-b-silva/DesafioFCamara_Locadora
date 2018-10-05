class ReservaController{

    constructor(Filmes){
        this.Filmes = Filmes;
    }

    get(req, res){
        res.send('get');
    }

    getById(req, res){
        res.send('get id');
    }

    create(req, res){
        res.send('post');
    }

    update(req, res){
        res.send('put');
    }

    remove(req, res){
        res.send('delete');
    }

}

module.exports = ReservaController;