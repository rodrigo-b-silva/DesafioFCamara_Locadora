process.env.PORT = process.env.PORT || 27017;
const setupApp = require('./src/app');
const port = 3000;


setupApp()
  .then(app => app.listen(port, () => console.log(`App rodando na porta ${port}`)))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });