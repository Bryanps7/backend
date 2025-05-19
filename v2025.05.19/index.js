// <IMPORTAÇÕES>
    const express = require('express')
    const app = express()
    const cors = require('cors')

    const controllerUsuario = require('./controller/usuario.controller')
    const db = require('./db/conn')
    const Usuario = require('./model/Usuario.model')
// </IMPORTAÇÕES>

// <CONFIGURAÇÕES>
const PORT = 3000
const hostname = 'localhost'
// </CONFIGURAÇÕES>

// <MIDDLEWARE>
    app.use(express.urlencoded({extended: true}))
    app.use(express.json())
    app.use(cors())
// </MIDDLEWARE>


// <CRUD-USUARIO>
    app.post('/usuario', controllerUsuario.cadastrarUsuario)
    app.get('/usuario', controllerUsuario.listarUsuario)
    app.delete('/usuario', controllerUsuario.apagarUsuario)
    app.put('/usuario', controllerUsuario.atualizarUsuario)
// </CRUD-USUARIO>

// <TESTE-SERVIDOR>
    app.get('/', async (req, res)=> {
        res.status(201).json({
            message: "Aplicação Rodando!"
        })
    }) 
// </TESTE-SERVIDOR>

// <CONEXÃO-DB>
    db.sync()
    .then(()=> {
        app.listen(PORT, hostname, ()=> {
            console.log(`| Servidor rodando na porta: http://${hostname}:${PORT}`);
        })
        
    })
    .catch((err)=> {
        console.error(`| Erro de conexão com o banco de dados: ${err}`);
    })
// </CONEXÃO-DB>