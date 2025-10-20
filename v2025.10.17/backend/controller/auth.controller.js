const Cliente = require('../model/Cliente')

const login = async (req, res) => {
    const valores = req.body

    if(!valores.email || !valores.senha) {
        return res.status(400).json({message: 'Para o login, informe código do usuário e senha!'})
    }

    try {
        
    } catch (err) {
        
    }
}

module.exports = { login }