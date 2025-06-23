const { DataTypes } = require('sequelize')

const db = require('../db/conn');
const Fabricante = require('./Fabricante');

const Produto = db.define('produto', {
    codProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    fabricante_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
        }
    },
    entrega_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'entregas',
            key: 'codEntrega'
        }
    }
}, {
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Produto;