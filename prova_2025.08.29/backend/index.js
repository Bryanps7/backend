const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000
const local = 'localhost'

const db = require('./db/conn')

const clienteController = require('./controller/cliente.controller')
const pratoController = require('./controller/prato.controller')
const pedidoController = require('./controller/pedido.controller')

// <middleware>
app.use(express.urlencoded({ extends: true }))
app.use(express.json())
app.use(cors())
// </middleware>

// Cliente
app.post('/cliente', clienteController.cadastrar)

// Prato
app.post('/prato', pratoController.cadastrar)

// Pedido
app.post('/pedido', pedidoController.cadastrar)
app.get('/pedido', pedidoController.listar)
app.put('/pedido/:id', pedidoController.atualizar)
app.delete('/pedido/:id', pedidoController.apagar)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})

db.sync()
    .then(() => {
        app.listen(PORT, local, (req, res) => {
            console.log(`Servidor rodando na porta: http://${local}:${PORT}`);
        })
    })
    .catch((err) => {
        console.error('Erro ao rodar o servidor: ', err);
    })