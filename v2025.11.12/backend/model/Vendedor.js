const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Vendedor = db.define('vendedor', {
    codVendedor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'vendedores',
    timestamps: false
})

module.exports = Vendedor;