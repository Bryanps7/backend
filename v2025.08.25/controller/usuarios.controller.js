const Usuarios = require('../model/Usuarios')

// rota de Autenticação
const login = (req, res) => {
    const valores = req.body

    console.log(valores.nome);
    console.log(valores.senha);
      
    const user = Usuarios.find(val => val.nome === valores.nome && val.senha === valores.senha)
    console.log(user);
    

    if(user) {
        res.status(200).json({
            message: "tk123"
        })
    } else {
        res.status(401).json({
            message: "Credenciais Inválidas!"
        })
    }
}

module.exports = { login }