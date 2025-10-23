const Cliente = require('../model/Cliente')

const cadastrar = async (req, res) => {
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha) {
        return res.status(400).json({
            message: 'Dados Incompletos. Responda todo os campo!'
        })
    }

    try {
        const dados = await Cliente.create(valores)

        res.status(201).json(dados)
        console.log('Novo cliente cadastrado');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao cadastrar o cliente'
        })
        console.error('erro ao cadastrar o cliente: ', err);
    }
}

module.exports = { cadastrar }