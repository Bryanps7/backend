const Pedido = require('../model/pedido')

const cadastrar = async (req, res) => {
    const dados = req.body

    try {
        const cadastro = await Pedido.create(dados)

        res.status(201).json(cadastro)
        console.log('> novo pedido cadastrado.');
    } catch (err) {
        res.status(500).json({
            message: "Erro ao cadastrar pedido",
            error: err
        })
        console.error('> erro ao cadastrar pedido.');
    }
}

const listar = async (req, res) => {
    try {
        const listagem = await Pedido.findAll()
        res.status(200).json(listagem)
        console.log('> nova busca de pedidos feita');

    } catch (err) {
        res.status(500).json({
            message: "Erro ao listar pedido",
            error: err
        })
        console.error('> erro ao listar pedido.');
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const dados = req.body

    try {
        const busca = await Pedido.findByPk(id)

        if (busca) {
            await Pedido.update(dados, { where: { codPedido: id } })
            res.status(200).json(await Pedido.findByPk(id))
            console.log('> pedido atualizado');
        } else {
            res.status(401).json({
                message: 'Não foi possível atualizar o pedido'
            })
            console.log('> pedido não foi atualizado');
        }

    } catch (err) {
        res.status(500).json({
            message: "Erro ao atualizar pedido",
            error: err
        })
        console.error('> erro ao atualizar pedido.');
    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    try {
        const busca = await Pedido.findByPk(id)

        if (busca) {
            await Pedido.destroy({ where: { codPedido: id } })
            res.status(200).json({
                message: 'Pedido Apagado com sucesso!'
            })
            console.log('> pedido apagado');
        } else {
            res.status(401).json({
                message: 'Não foi possível apagar o pedido'
            })
            console.log('> pedido não foi apagado');
        }
    } catch (err) {
        res.status(500).json({
            message: "Erro ao apagar pedido",
            error: err
        })
        console.error('> erro ao apagar pedido.');

    }
}

module.exports = { cadastrar, listar, atualizar, apagar }