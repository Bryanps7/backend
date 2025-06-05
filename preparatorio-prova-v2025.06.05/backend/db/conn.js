const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prinz3b', 'root', 'senai', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

sequelize.authenticate().then(() => {
    console.log('Funcionou')
})

module.exports = sequelize;