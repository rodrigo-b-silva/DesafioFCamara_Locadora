const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Util = require('util');
const bcrypt = require('bcrypt');

const hashAsync = Util.promisify(bcrypt.hash);

const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    admin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
});

userSchema.pre('save', function (next) {
    if (!this.password || !this.isModified('password')) {
        return next();
    }
    hashAsync(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(err => next(err));
});

userSchema.set('toJSON', {
    transform: (doc, ret, options) => ({
        _id: ret._id,
        email: ret.email,
        name: ret.name,
        role: ret.role,
        isActive: ret.isActive
    })
});

module.exports = mongoose.model('user', userSchema, 'users');