// framework sequelize
const { Sequelize } = require('sequelize');

// config da banco de dados
const sequelize = new Sequelize('db_bk3', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
});

// avisa se funcionou
sequelize.authenticate()
.then(()=> {
    console.log('| Banco de Dados conectado.');    
})
.catch((err)=>{
    console.error('Erro de conexão de DB', err);
})

// exportando para usar em outros arquivos
module.exports = sequelize;