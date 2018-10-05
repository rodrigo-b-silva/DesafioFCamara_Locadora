const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservaSchema = new Schema({
    tempoMin: Number,
    tempoMax: Number,
    valorMulta: Number,
    valorTotal: Number,
    filme: {
        id: Schema.Types.ObjectId,
        nome: String
    },
    user: {
        id: Schema.Types.ObjectId,
        nome: String
    }
    
});