const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000
const hostname = 'localhost'

const db = require('./db/conn')

const authMiddleware = require('./middleware/auth.middleware')
const authController = require('./controller/auth.controller')
const vendedorController = require('./controller/vendedor.controller')
const produtoController = require('./controller/produto.controller')
const estoqueController = require('./controller/estoque.controller')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// ROTAS PÚBLICOS
app.post('/vendedor', vendedorController.cadastrar)

app.post('/login', authController.login)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})

// ROTAS PRIVADAS
app.use(authMiddleware)

app.post('/produto', produtoController.cadastrar)
app.get('/produto', produtoController.listar)
app.get('/produto/nome', produtoController.buscarPorNome)
app.put('/produto/:id', produtoController.atualizar)
app.delete('/produto/:id', produtoController.apagar)

app.post('/estoque', estoqueController.cadastrar)
app.get('/estoque', estoqueController.listar)

db.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err)
    })