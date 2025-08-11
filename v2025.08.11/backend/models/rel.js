const Produto = require('./Produto')
const Fabricante = require('./Fabricante')
const Entrega = require('./Entrega')

Fabricante.hasMany(Produto,{
    foreignKey: 'idFabricante',
    as: 'produtoFabricante',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Fabricante,{
    foreignKey: 'idFabricante',
    as: 'fabricanteProduto',
    allowNull: false
})

Entrega.hasMany(Produto,{
    foreignKey: 'idEntrega',
    as: 'produtoEntrega',
    onDelete: 'CASCADE'
})

Produto.belongsTo(Entrega,{
    foreignKey: 'idEntrega',
    as: 'entregaProduto',
    allowNull: false
})

module.exports = { Fabricante, Produto, Entrega }