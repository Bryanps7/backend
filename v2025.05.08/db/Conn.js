const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('ensino_davi', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
}) // TUSHD

sequelize.authenticate()
.then(()=>{
    console.log("Banco conectado");
})
.catch((err)=>{
    console.error("Banco de Errado", err);
});