const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Estoque = db.define('estoque', {
    codEstoque: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    qtdeMinimo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
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