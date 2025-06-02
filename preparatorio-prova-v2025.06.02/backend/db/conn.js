const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('prinz3b', 'root', 'senai', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

// sequelize.authenticate().then(console.log('deu certo')).catch((err)=>{console.error('deu errado')})

module.exports = sequelize;