const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Fabricante = db.define('fabricante', {
    codFabricante: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'fabricantes'
})

module.exports = Fabricante;