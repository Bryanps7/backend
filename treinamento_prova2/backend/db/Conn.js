const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('treinamento', 'root', 'luna', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;