const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db_restaurante', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('> Banco de Dados Rodando');
})
.catch((err)=>{
    console.error('> Erro ao conectar ao banco: ',err);
    
})

module.exports = sequelize;