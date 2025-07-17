const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('prinz3b', 'root', 'luna', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate().then(()=>{
    console.log('deu certo');
})

module.exports = sequelize;