const Usuarios = require('../model/Usuarios')

// rota Login (autenticação)
const login = (req, res) => {
    const valores = req.body
    console.log(valores.nome)
    console.log(valores.senha)

    const user = Usuarios.find(val => val.nome == valores.nome && val.senha === valores.senha)
    console.log(user)

    if (user) {
        res.status(200).json({ message: "tk123" })
    } else {
        res.status(401).json({ message: "Credenciais Inválidas!" })
    }
}

const listar = (req, res) => {
    res.status(200).json({message: Usuarios.map(val => ({
        id: val.id,
        nome: val.nome
    }))})
}

const buscarPorId = (req, res) => {
    const user = Usuarios.find(val => val.id == req.params.id)
    console.log(user);
    
    if (user) {
        res.status(200).json(user)
        
    } else {
        
    }
}

module.exports = { login, listar }