const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Pedido = db.define('pedido', {
    codPedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCliente: {
        type: DataTypes.INTEGER,
        references: {
            key: 'codCliente',
            model: 'clientes'
        }
    },
    idPrato: {
        type: DataTypes.INTEGER,
        references: {
            key: 'codPrato',
            model: 'pratos'
        }
    },
    dataPedido: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valorTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'pedidos'
})

module.exports = Pedido;