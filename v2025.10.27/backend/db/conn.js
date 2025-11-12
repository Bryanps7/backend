const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db_carrinho', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('> tá funcionando');
})
.catch((err)=>{
    console.error('> acho que não deu :< ', err);
})

module.exports = sequelize