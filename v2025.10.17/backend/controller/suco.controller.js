const Suco = require('../model/Suco')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.sabor || !valores.quantidade || !valores.precoUni) {
        return res.status(400).json({
            message: 'Dados Incompletos'
        })
    }

    try {
        const dados = await Suco.create(valores)
        res.status(201).json(dados)
        console.log('Dados Cadastrados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao cadastar suco',
            error: err
        })
        console.error('Erro ao cadastrar suco: ', err);
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Suco.findAll()
        res.status(200).json({
            message: 'Listagem com sucesso'
        })
        console.log('Listagem com sucesso');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao listar',
            error: err
        })
        console.error('Erro ao listar: ', err);
    }
}

const { Op } = require('sequelize')

const buscarPorSabor = async (req, res) => {
    const sabor = req.params.sabor

    try {
        const dados = await Suco.findOne({
            where: {
                sabor: {
                    [Op.iLike]: `%${sabor}%`
                }
            }
        })
        if (!dados) {
            res.status(404).json({
                message: 'Não encontrei :('
            })
            console.log('Nada foi encontrado');
        } else {
            res.status(200).json(dados)
            console.log('Dados encontrados');
        }
    } catch (err) {
        res.status(500).json({
            message: 'erro ao buscar',
            error: err
        })
        console.error('Erro ao buscar: ', err);
    }
}

module.exports = { cadastrar, listar, buscarPorSabor }