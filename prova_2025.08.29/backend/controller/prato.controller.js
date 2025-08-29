const Prato = require('../model/prato')

const cadastrar = async (req, res) => {
    const dados = req.body

    try {
        const cadastro = await Prato.create(dados)
    
        res.status(201).json(cadastro)
        console.log('> novo prato cadastrado.');
    } catch (err) {
        res.status(500).json({
            message: "Erro ao cadastrar prato",
            error: err
        })
        console.error('> erro ao cadastrar prato.');
    }
}

module.exports = { cadastrar }