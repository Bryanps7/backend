const Hospede = require('../model/Hospede')

const cadastrar = async (req, res) => {
    const dados = req.body

    try {
        const valores = await Hospede.create(dados)
        res.status(201).json(valores)
        console.log('> Cadastro Realizado');
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao cadastrar'
        })
        console.error('> erro ao cadastrar: ', err);
    }
}

const listar = async (req, res) => {

    try {
        const valores = await Hospede.findAll()
        if (valores) {
            res.status(200).json(valores)
            console.log('> Listagem realizada')
        } else {
            res.status(404).json({
                message: 'Não foi possivel encontrar'
            })
            console.log('> Não encontrou a listagem')
        }
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao listar'
        })
        console.error('> erro ao listar: ', err);
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const dados = req.body

    try {
        const valores = await Hospede.findByPk(id)
        if (valores === null) {
            res.status(404).json({
                message: 'não encontrei o hospede'
            })
            console.log('> não encontrei o hospede')
        } else {
            const update = await Hospede.update(dados, { where: { id: id } })
            res.status(200).json(update)
            console.log('> atualização concluida')
        }
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao atualizar'
        })
        console.error('> erro ao atualizar: ', err);
    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    try {
        const valores = await Hospede.findByPk(id)
        if (valores === null) {
            res.status(404).json({
                message: "não achei o id"
            })
            console.log('> não encontrou o id')
        } else {
            const apagar = await Hospede.destroy({ where: { id: id } })
            res.status(200).json({
                message: 'apagou com sucesso'
            })
            console.log('> apagou com sucesso')
        }
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao apagar'
        })
        console.error('> erro ao apagar: ', err);
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }