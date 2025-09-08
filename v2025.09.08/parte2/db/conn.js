const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db_jwt_bcript', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('> conexao com banco bem sucedida.');
})
.catch((err)=>{
    console.error('> erro ao conectar ao banco. ', err);
})

module.exports = sequelize;