const Vendedor = require('../model/Vendedor')

const cadastrar = async (req, res) => {
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha) {
        return res.status(404).json({ message: 'Dados incompletos' })
    }

    try {
        const dados = await Vendedor.create(valores)
        res.status(201).json(dados)
    } catch (err) {
        res.status(500).json({ 
            message: 'Erro ao cadastrar vendedor', 
            error: err.message 
        })
        console.error('Erro ao cadastrar vendedor: ', err);
    }
}

module.exports = { cadastrar }