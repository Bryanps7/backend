const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Vendedor = db.define('vendedor', {
    codVendedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'vendedores'
})

module.exports = Vendedor