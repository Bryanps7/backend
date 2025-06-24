const Entrega = require('../model/Entrega')

const cadastrar = async (req, res) => {
    const dados = req.body

    try {
        const post = await Entrega.create(dados)
        console.log('> dados cadastrados com sucesso.');
        res.status(201).json(post)
    } catch (err) {
        console.error('> erro ao cadastrar os dados: ', err);
        res.status(500).json({
            message: 'erro ao cadastrar.',
            error: err
        })
    }
}

const listar = async (req, res) => {
    try {
        const listen = await Entrega.findAll()
        if (!listen) {
            console.log('> dados listados com sucesso.');
            res.status(200).json(listen)
        } else {
            console.log('> dados não encontrados.');
            res.status(404).json({
                message: 'dados não encontrados.'
            })
        }
    } catch (err) {
        console.error('> erro ao listar os dados: ', err);
        res.status(500).json({
            message: 'erro ao listar.',
            error: err
        })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    try {
        const search = await Entrega.findByPk(id)
        if (!search) {
            await Entrega.destroy({ where: { codEntrega: id } })
            console.log('> dados apagados com sucesso.');
            res.status(200).json({
                message: 'dados apagados com sucesso'
            })
        } else {
            console.log('> dados não encontrados.');
            res.status(404).json({
                message: 'dados não encontrados.'
            })
        }
    } catch (err) {
        console.error('> erro ao apagar os dados: ', err);
        res.status(500).json({
            message: 'erro ao apagar.',
            error: err
        })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const dados = req.body

    try {
        const search = await Entrega.findByPk(id)
        if (!search) {
            await Entrega.update(dados, { where: {codEntrega: id} })
            console.log('> dados atualizados com sucesso.');
            res.status(200).json({
                message: 'dados atualizados com sucesso'
            })
        } else {
            console.log('> dados não encontrados.');
            res.status(404).json({
                message: 'dados não encontrados.'
            })
        }
    } catch (err) {
        console.error('> erro ao atualizar os dados: ', err);
        res.status(500).json({
            message: 'erro ao atualizar.',
            error: err
        })
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }