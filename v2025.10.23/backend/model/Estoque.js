const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Estoque = db.define('estoque', {
    codEstoque: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    },
    idSuco: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'sucos',
            key: 'codSuco'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    movimentacao: {
        type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'estoques'
})

module.exports = Estoque;