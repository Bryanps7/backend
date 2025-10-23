const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Suco = db.define('suco', {
    codSuco: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sabor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoUni: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'sucos'
})

module.exports = Suco;