const { Cliente, Suco, Estoque } = require('../model/rel')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores);
    

    if (!valores.idCliente || !valores.idSuco || !valores.quantidade || !valores.movimentacao) {
        return res.status(400).json({
            message: 'Dados Incompletos. Responda todo os campo!'
        })
    }

    try {
        const cliente = await Cliente.findByPk(valores.idCliente)

        if (!cliente) {
            console.log('Nenhum Cliente encontrado');
            return res.status(404).json({
                message: 'Nenhum Cliente encontrado'
            })
        }

        const suco = await Suco.findByPk(valores.idSuco)

        if (!suco) {
            console.log('Nenhum Suco encontrado');
            return res.status(404).json({
                message: 'Nenhum Suco encontrado'
            })
        }

        let newQuantidade = suco.quantidade

        if (valores.movimentacao === 'ENTRADA') {
            newQuantidade += valores.quantidade

        } else if (valores.movimentacao === 'SAIDA') {
            if (suco.quantidade < valores.quantidade) {
                return res.status(400).json({
                    message: 'estoque insuficiente'
                })
            }
            newQuantidade -= valores.quantidade
        } else {
            return res.status(400).json({
                message: 'tipo de movimentação inválida'
            })
        }

        await suco.update({
            quantidade: newQuantidade
        })

        const dados = await Estoque.create({
            idCliente: valores.idCliente,
            idSuco: valores.idSuco,
            quantidade: valores.quantidade,
            movimentacao: valores.movimentacao
        })

        res.status(201).json({
            message: 'Movimentação registrada com sucesso!',
            newQuantidade,
            dados
        })
    } catch (err) {
        res.status(500).json({
            message: 'erro ao registrar a Movimentação'
        })
        console.error('erro ao registrar a Movimentação: ', err);
    }
}

const listar = async (req, res) => {
    try {
        const dados = await Estoque.findAll({
            include: [
                { model: Cliente, as: 'clienteEst' },
                { model: Suco, as: 'sucoEst' }
            ]
        })
        res.status(200).json(dados)
    } catch (err) {
        console.error('Erro ao listar os dados', err)
        res.status(500).json({ message: 'Erro ao listar os dados' })
    }
}

module.exports = { cadastrar, listar }