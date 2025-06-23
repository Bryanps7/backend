const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Entrega = db.define('entrega', {
    codEntrega: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    local: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    responsavel: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'entregas'
})

module.exports = Entrega;