const Vendedor = require('../model/Vendedor')

const login = async (req, res) => {
    const valores = req.body

    if(!valores.email || !valores.senha) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const dados = await Vendedor.findOne({
            where: {
                email: valores.email
            }
        })

        if(!dados) {
            return res.status(404).json({
                message: 'Dados não encontrados'
            })
        }

        res.status(201).json({
            message: 'login realizado',
            statusLog: true,
            name: dados.nome
        })

        console.log('login realizado');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);
        
    }
}

module.exports = { login }