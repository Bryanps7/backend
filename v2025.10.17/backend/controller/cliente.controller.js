const Cliente = require('../model/Cliente')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.nome || !valores.email || !valores.senha) {
        return res.status(400).json({
            message: 'dados incompletos'
        })
    }

    try {
        const dados = await Cliente.create(valores)
        res.status(201).json({
            codCliente: dados.codCliente,
            nome: dados.nome,
            email: dados.email
        })
        console.log('Sucesso ao Cadastrar');
    } catch (err) {
        res.status(500).json({
            message: 'Erro ao cadastrar o Cliente',
            error: err
        })
        console.error('Erro ao cadastrar o cliente: ', err);
    }
}

module.exports = { cadastrar }