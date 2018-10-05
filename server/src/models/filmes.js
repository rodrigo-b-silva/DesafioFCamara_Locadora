const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmeSchema = new Schema({
    nome: { type: String},
    genero: { type: String},
    atores: [
        { type: String}
    ],
    lancamento: { type: Date},
    duracao: { type: Number},
    diretor: { type: String},
    sinopse: { type: String},
    quantidade: { type: Number }

});

module.exports = mongoose.model('filme', filmeSchema, 'filmes');