const Suco = require('../model/Suco')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.sabor || !valores.quantidade || !valores.precoUni) {
        return res.status(400).json({
            message: 'Dados Incompletos. Responda todo os campo!'
        })
    }

    try {
        const dados = await Suco.create(valores)
        res.status(201).json(dados)
        console.log('Novo Suco cadastrado');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao cadastrar o Suco'
        })
        console.error('erro ao cadastrar o Suco: ', err);
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Suco.findAll()

        if (!dados) {
            console.log('Nenhum Suco encontrado');
            return res.status(404).json({
                message: 'Nenhum Suco encontrado'
            })
        }
        res.status(201).json(dados)
        console.log('Sucos encontrados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao listar o Suco'
        })
        console.error('erro ao listar o Suco: ', err);
    }
}

const { Op } = require('sequelize')

const buscarPorSabor = async (req, res) => {
    const sabor = req.params.sabor

    if (!sabor) {
        return res.status(400).json({
            message: 'Dados Incompletos. Responda todo os campo!'
        })
    }

    try {
        const dados = await Suco.findOne({
            where: {
                sabor: {
                    [Op.like]: `%${sabor}%`
                }
            }
        })

        if (!sabor) {
            console.log('Nenhum Suco encontrado');
            return res.status(404).json({
                message: 'Nenhum Suco encontrado'
            })
        }
        res.status(201).json(dados)
        console.log('Sucos encontrados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao buscar o Suco'
        })
        console.error('erro ao buscar o Suco: ', err);
    }
}

module.exports = { cadastrar, listar, buscarPorSabor }