const Cliente = require('../model/Cliente')
const { comparePassword } = require('../service/bcrypt.service')
const { generateToken } = require('../service/jwt.service')

const login = async (req, res) => {
    try {
        const valores = req.body
        const cliente = await Cliente.findOne({ where: { email: valores.email } })

        if (!cliente) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        const senhaValida = await comparePassword(valores.senha, cliente.senha)

        if (!senhaValida) {
            return res.status(401).json({ error: "Senha Inválida!" })
        }

        const token = generateToken({ id: cliente.codCliente, email: cliente.email })
        res.status(200).json({
            message: "Login realizado com sucesso!",
            token
        })

    } catch (error) {
        res.status(500).json({ error: "Erro ao realizar o login!" })
        console.error("Erro ao realizar o login!", err);

    }
}

module.exports = { login }