const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true 
    },
    nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    telefone: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: false
})

module.exports = User