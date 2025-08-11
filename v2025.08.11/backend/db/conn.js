const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db_banco','root','senai',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

sequelize.authenticate()

.then(()=>{
    console.log("conexão realizada com sucesso!")
})
.catch((err)=>{
    console.error("Erro ao conectar o banco", err)
})

module.exports = sequelize