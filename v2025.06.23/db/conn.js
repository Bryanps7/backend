const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('prinz3b', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('Conexão Realizada com Sucesso!');
})

module.exports = sequelize;