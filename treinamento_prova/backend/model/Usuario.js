const { DataTypes } = require('sequelize')

const db = require('../db/Conn')

const Usuario = db.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    altura: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Usuario;