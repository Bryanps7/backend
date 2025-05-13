const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('treinamneto', 'root', 'luna', {
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate()
// .then(()=>{
//     console.log("Banco de Dados rodando");
// })
// .catch((err)=>{
//     console.error("Erro no banco de Dados", err);
// })

module.exports = sequelize;