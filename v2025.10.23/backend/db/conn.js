const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db_teste', 'root', 'luna', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('Banco de Dados rodando!');
})
.catch((err)=>{
    console.error('Falha no banco de dados: ', err);
})

module.exports = sequelize