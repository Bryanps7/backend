const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('a', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('Servidor Rodando');
})  
.catch((err)=>{
    console.error('Erro ao rodar servidor: ', err);
})

module.exports = sequelize;