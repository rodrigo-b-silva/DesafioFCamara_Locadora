const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Util = require('util');
const bcrypt = require('bcrypt');

const hashAsync = Util.promisify(bcrypt.hash);

const userSchema = new Schema({
    nome: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    password: { 
        type: String,
        required: true
    },
    rg: { type: String },
    endereco: { type: String },
    telefone: { type: String },
    isActive: { 
        type: Boolean, 
        default: true 
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});


// userSchema.pre('save', function (next) {
//     if (!this.password || !this.isModified('password')) {
//         return next();
//     }
//     hashAsync(this.password, 10)
//         .then(hashedPassword => {
//             this.password = hashedPassword;
//             next();
//         })
//         .catch(err => next(err));
// });

// userSchema.set('toJSON', {
//     transform: (doc, ret, options) => ({
//         _id: ret._id,
//         email: ret.email,
//         name: ret.name,
//         rg: ret.rg,
//         endereco: ret.endereco,
//         telefone: ret.telefone,
//         admin: ret.admin,
//         password: ret.password,
//         isActive: ret.isActive
//     })
// });

module.exports = mongoose.model('User', userSchema);