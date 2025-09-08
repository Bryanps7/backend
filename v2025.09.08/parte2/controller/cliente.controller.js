const Cliente = require('../model/Cliente')
const { hashPassword } = require('../service/bcrypt.service')

const cadastrar = async (req, res) => {
    const valores = req.body

    try {
        const senhaHash = await hashPassword(valores.senha)

        const cliente = await Cliente.create({
            nome: valores.nome,
            email: valores.email,
            senha: senhaHash
        })

        res.status(201).json({
            message: "Cliente cadastro com sucesso!"
        })
    } catch (err) {
        res.status(500).json({ error: "Erro ao cadastrar o cliente" })
        console.error('Erro ao cadastrar o cliente: ', err);
    }
}

const listar = async (req, req) => {
    try {
        const cliente = await Cliente.findAll()
        res.status(200).json(cliente)
    } catch (err) {
        res.status(500).json({ error: "Erro ao listar o cliente" })
        console.error('Erro ao listar o cliente: ', err);
    }
}

module.exports = { cadastrar, listar }