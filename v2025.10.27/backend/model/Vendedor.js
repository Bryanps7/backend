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
    }
}, {
    timestamps: false,
    tableName: 'vendedores'
})

module.exports = Vendedor;