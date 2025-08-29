const Cliente = require('../model/cliente')

const cadastrar = async (req, res) => {
    const dados = req.body

    try {
        const cadastro = await Cliente.create(dados)
    
        res.status(201).json(cadastro)
        console.log('> novo cliente cadastrado.');
    } catch (err) {
        res.status(500).json({
            message: "Erro ao cadastrar cliente",
            error: err
        })
        console.error('> erro ao cadastrar cliente.');
    }
}

module.exports = { cadastrar }