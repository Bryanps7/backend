const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    codProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    idFabricante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'fabricantes',
            key: 'codFabricante'
        }
    },
    idEntrega: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'entregas',
            key: 'codEntrega'
        }
    }
},{
    tableName: 'produtos',
    timestamps: false
})

module.exports = Produto