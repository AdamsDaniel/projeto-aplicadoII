const database = require('./init');

(async () => {
    try {
        await database.authenticate();
        console.log('Sucesso ao conectar ao banco de dados.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
})();

module.exports = database;
