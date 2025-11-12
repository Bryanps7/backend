const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Venda = db.define('venda', {
    codVenda: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'vendas'
})

module.exports = Venda;