const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Estoque = db.define('estoque', {
    codEstoque: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }, 
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    tipo: {
        type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'estoques'
})

module.exports = Estoque