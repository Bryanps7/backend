const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Estoque = db.define('estoque', {
    codEstoque: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idVendedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'vendedores',
            key: 'codVendedor'
        }
    },
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoUni: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    }
}, {
    tableName: 'estoques',
    timestamps: false
})

module.exports = Estoque