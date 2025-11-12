const { Vendedor, Produto, Estoque } = require('../model/rel')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.idVendedor || !valores.idProduto || !valores.data || !valores.quantidade || !valores.tipo) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const vendedor = await Vendedor.findByPk(valores.idVendedor)
        if (!vendedor) {
            return res.status(404).json({
                message: "vendedor não encontrado"
            })
        }

        const produto = await Produto.findByPk(valores.idProduto)
        if (!produto) {
            return res.status(404).json({
                message: "Produto não encontrado"
            })
        }

        let novaQuantidade = produto.quantidade

        if (valores.tipo == 'ENTRADA') {
            novaQuantidade += valores.quantidade
        } else if (valores.tipo == 'SAIDA') {
            if (valores.quantidade > produto.quantidade) {
                return res.status(400).json({
                    message: 'Valor maior inserido'
                })
            } else if (valores.quantidade < produto.quantidade) {
                novaQuantidade -= valores.quantidade
            }
        } else {
            return res.status(404).json({
                message: 'Tipo inválido'
            })
        }

        const dadosProduto = {
            nome: produto.nome,
            marca: produto.marca,
            quantidade: novaQuantidade,
            precoUni: produto.precoUni
        }

        await Produto.update(dadosProduto, {
            where: {
                codProduto: produto.codProduto
            }
        })

        const dados = await Estoque.create(valores)

        res.status(201).json(dados)
        console.log(novaQuantidade);

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
        const dados = await Estoque.findAll({
            include: [
                { model: Vendedor, as: 'vendedorEst' },
                { model: Produto, as: 'produtoEst' }
            ]
        })

        res.status(200).json(dados)
        console.log('dados Listados');


    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);

    }
}

module.exports = { cadastrar, listar }