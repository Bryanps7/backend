const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('prinz3b', 'root', 'senai', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

// sequelize.authenticate()
// .then(()=> {
//     console.log('Deu certo');
// })
// .catch((err)=> {
//     console.error('Deu errado', err);
// })

module.exports = sequelize;