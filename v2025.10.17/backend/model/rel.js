const Cliente = require('./Cliente')
const Suco = require('./Suco')
const Estoque = require('./Estoque')

Cliente.hasMany(Estoque, {
    foreignKey: 'idCliente',
    as: 'estoqueCli',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Cliente, {
    foreignKey: 'idCliente',
    as: 'clienteEst',
    allowNull: false
})

Suco.hasMany(Estoque, {
    foreignKey: 'idSuco',
    as: 'estoqueSuc',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Suco, {
    foreignKey: 'idSuco',
    as: 'SucoEst',
    allowNull: false
})

module.exports = { Cliente, Suco, Estoque }