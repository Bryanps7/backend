const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000
const hostname = 'localhost'

const db = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const authController = require('./controller/auth.controller')
const clienteController = require('./controller/cliente.controller')
const sucoController = require('./controller/suco.controller')
const estoqueController = require('./controller/estoque.controller')

// midlewarre
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// /midlewarre

// ROTA PÚBLICA
app.post('/cliente', clienteController.cadastrar)
app.get('/login', authController.login)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})

// ROTA PRIVADA
app.use(authMiddleware)

app.post('/suco', sucoController.cadastrar)
app.get('/suco', sucoController.listar)
app.get('/suco/:sabor', sucoController.buscarPorSabor)

app.post('/estoque', estoqueController.cadastrar)
app.get('/estoque', estoqueController.listar)

db.sync()
    .then(() => {
        app.listen(PORT, hostname, (req, res) => {
            console.log(`Servidor rodando em: http://${hostname}:${PORT}`);
        })
    })
    .catch((err)=>{
        console.error('erro ao conectar o servidor :< : ', err);
    })