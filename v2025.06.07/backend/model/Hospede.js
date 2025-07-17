const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Hospede = db.define('hospede', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true // PK
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quarto: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    timestamps: false
})

module.exports = Hospede;