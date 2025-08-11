const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Fabricante = db.define('fabricante', {
    codFabricante:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(40),
        allowNull: false
    }
},{
    tableName: 'fabricantes',
    timestamps: false
})

module.exports = Fabricante