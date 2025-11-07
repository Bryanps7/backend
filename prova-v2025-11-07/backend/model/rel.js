const Vendedor = require('./Vendedor')
const Produto = require('./Produto')
const Estoque = require('./Estoque')

Vendedor.hasMany(Estoque, {
    as: 'estoqueVen',
    foreignKey: 'idVendedor',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Vendedor, {
    as: 'vendedorEst',
    foreignKey: 'idVendedor',
    allowNull: false
})


Produto.hasMany(Estoque, {
    as: 'estoquePro',
    foreignKey: 'idProduto',
    onDelete: 'CASCADE'
})

Estoque.belongsTo(Produto, {
    as: 'produtoEst',
    foreignKey: 'idProduto',
    allowNull: false
})

module.exports = { Vendedor, Produto, Estoque }