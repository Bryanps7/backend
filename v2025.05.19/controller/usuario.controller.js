const Usuario = require('../model/Usuario.model')

const cadastrarUsuario = async (req, res) => {
    const dados = req.body
    console.log(dados);
    try {
        let valores = await Usuario.create(dados)
        res.status(200).json(valores)
    } catch (error) {
        console.error('| Erro ao cadastrar os dados: ',error);
        res.status(500).json({
            message: "Erro ao cadastrar os dados"
        })
    }
}
const listarUsuario = async (req, res) => {
    res.status(200).json({
        message: "Dados do Usuário Listados"
    })
}

const apagarUsuario = async (req, res) => {
    res.status(200).json({
        message: "Dados excluidos com sucesso"
    })
}

const atualizarUsuario = async (req, res) => {
    const dados = req.body
    console.log(dados);
    
    res.status(200).json({
        message: "Dados atualizados com sucesso"
    })
}



module.exports = { cadastrarUsuario, listarUsuario, apagarUsuario, atualizarUsuario }