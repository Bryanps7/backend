const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega',{
    codEntrega: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    local:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    responsavel:{
        type: DataTypes.STRING(40),
        allowNull: false
    }
},{
    tableName: 'entregas',
    timestamps: false
})

module.exports = Entrega