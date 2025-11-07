const Produto = require('../model/Produto')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.nome || !valores.marca || !valores.quantidade || !valores.precoUni) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const dados = await Produto.create(valores)

        res.status(201).json(dados)
        console.log('dados registrados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);

    }
}

const listar = async (req, res) => {
    try {
        const dados = await Produto.findAll()

        if (!dados) {
            return res.status(404).json({
                message: 'Dados não encontrados'
            })
        }

        res.status(200).json(dados)
        console.log('dados listados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);

    }
}

const buscarPorNome = async (req, res) => {
    const nome = req.query.nome

    if (!nome) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const dados = await Produto.findOne({
            where: {
                nome: nome
            }
        })

        if (!dados) {
            return res.status(404).json({
                message: 'Dados não encontrados'
            })
        }

        res.status(200).json(dados)
        console.log('dados buscados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);

    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body

    if (!valores.nome || !valores.marca || !valores.quantidade || !valores.precoUni || !id) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const dados = await Produto.findByPk(id)

        if (!dados) {
            return res.status(404).json({
                message: 'Dados não encontrados'
            })
        }

        await Produto.update(valores, {
            where: {
                codProduto: id
            }
        })

        const novosDados = await Produto.findByPk(id)

        res.status(200).json(novosDados)
        console.log('dados atualizados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);

    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    if (!id) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const dados = await Produto.findByPk(id)

        if (!dados) {
            return res.status(404).json({
                message: 'Dados não encontrados'
            })
        }

        await Produto.destroy({
            where: {
                codProduto: id
            }
        })

        res.status(200).json({
            message: 'dados Apagados'
        })

        console.log('dados atualizados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);

    }
}


module.exports = { cadastrar, listar, buscarPorNome, atualizar, apagar }