const Cliente = require('../model/Cliente')
const { compareSenha } = require('../service/bcrypt.service')
const { gerarToken } = require('../service/jwt.service')

const login = async (req, res) => {
    const valores = req.body

    try {
        const cliente = await Cliente.findOne({ where: { email: valores.email } })

        if (!cliente) {
            return req.status(404).json({
                error: "Cliente não encontrado"
            })
        }

        const senhaValida = await compareSenha(valores.senha, cliente.senha)

        if (!senhaValida) {
            return res.status(401).json({
                error: 'Senha Inválida'
            })
        }

        const token = gerarToken({ 
            codCliente: cliente.codCliente, 
            email: cliente.email
        })

        res.status(200).json({
            message: 'O login foi realizado com sucesso!', token
        })

        console.log('> login efetuado | token: ', token);
        

    } catch (err) {
        res.status(500).json({
            error: "erro ao realizar login!"
        })
    }
}

module.exports = { login };