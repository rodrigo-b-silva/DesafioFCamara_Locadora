const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    filme: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Filme'
    },
    tempoMin: {
        type: Number
    },
    tempoMax: Number,
    valorMulta: {
        type: Number,
        default: 3
    },
    valorTotal: Number,
});

module.exports = mongoose.model('Reserva', reservaSchema);