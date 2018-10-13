const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmeSchema = new Schema({
    nome: { 
        type: String,
        required: true,
        trim: true, //remove espaços em branco do começo e do fim
        unique: true, // indica que não haverá os filmes com o mesmo nome
        index: true // indoca um indice para facilitar a busca
    },
    genero: { type: String },
    lancamento: { type: Date },
    duracao: { type: Number },
    diretor: { type: String },
    sinopse: { type: String },
    quantidade: { 
        type: Number,
        default: 1 
    },
    atores: [
        { 
            type: String,
            required: true 
        }
    ],
    preco: { 
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Filme', filmeSchema);