const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('a', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('> funcionaaaaa');
})
.catch((err)=>{
    console.error('> não funciona: ', err);
})

module.exports = sequelize;