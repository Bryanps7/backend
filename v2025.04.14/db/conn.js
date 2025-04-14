const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BACKEND1', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(()=>{
    console.log('Conexão Banco de dados com Sucesso');
})
.catch((err)=>{
    console.error('Erro de conexão com o banco de dados', err);
});

module.exports = sequelize;