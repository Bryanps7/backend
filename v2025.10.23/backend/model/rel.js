const Cliente = require('./Cliente')
const Suco = require('./Suco')
const Estoque = require('./Estoque')

Cliente.hasMany(Estoque, {
    as: 'estoqueCli',
    foreignKey: 'idCliente',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Cliente, {
    as: 'clienteEst',
    foreignKey: 'idCliente',
    allowNull: false
})

Suco.hasMany(Estoque, {
    as: 'estoqueSuc',
    foreignKey: 'idSuco',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Suco, {
    as: 'sucoEst',
    foreignKey: 'idSuco',
    allowNull: false
})

module.exports = { Cliente, Suco, Estoque }