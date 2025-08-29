const Cliente = require('./cliente')
const Prato = require('./prato')
const Pedido = require('./pedido')

Cliente.hasMany(Pedido, {
    foreignKey: 'idCliente',
    as: 'pedidoCli'
})

Pedido.hasOne(Cliente, {
    foreignKey: 'codCliente',
    as: 'clientePed'
})

Prato.hasMany(Pedido, {
    foreignKey: 'idPrato',
    as: 'pedidoPra'
})

Pedido.hasOne(Prato, {
    foreignKey: 'codPrato',
    as: 'PratoPed'
})

module.exports = { Cliente, Prato, Pedido }