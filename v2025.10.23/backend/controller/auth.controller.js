const Cliente = require('../model/Cliente')

const login = async (req, res) => {
    const valores = req.body

    if (!valores.codCliente || !valores.senha) {
        return res.status(400).json({
            message: 'Dados Incompletos. Responda todo os campo!'
        })
    }

    try {
        const dados = await Cliente.findByPk(valores.codCliente)

        if (!dados) {
            console.log('Nenhum Cliente encontrado');
            return res.status(404).json({
                message: 'Nenhum Cliente encontrado'

            })
        }

        if (valores.senha === dados.senha) {
            res.status(200).json({
                message: 'Login realizado!',
                statusLog: true,
                nome: dados.nome
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'erro ao fazer o login'
        })
        console.error('erro ao fazer o login: ', err);
    }
}

module.exports = { login }