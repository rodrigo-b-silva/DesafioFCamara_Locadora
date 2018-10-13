global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef'; //chave para gerar token e senha
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo!'; //template de email para novo usuario

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
process.env.PORT = process.env.PORT || 27017;

const uri = process.env.MONGODB_URL || `mongodb://localhost:${process.env.PORT}/locadora`;
//const uri = process.env.MONGODB_URL || `mongodb://admin:admin123locadora@ds045097.mlab.com:45097/locadora`;

//const connect = () => mongoose.connect(uri);
//module.exports = { connect };

module.exports = {
    connectionString: uri,
    sendgridKey: 'TBD', // utilizado para envio de email
    containerConnectionString: 'TBD' // utilizado para armazenar imagens no azure
}