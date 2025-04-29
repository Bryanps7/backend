// formatação
const { DataTypes } = require('sequelize')

const db = require('../db/Conn')

// config da TABELA Cliente
const Cliente = db.define('cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Cliente;