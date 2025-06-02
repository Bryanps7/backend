const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const local = 'localhost'

const db = require('./db/conn')
const controller = require('./controller/Hospede.controller')

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// middleware

app.post('/hospede', controller.cadastrar)
app.get('/hospede', controller.listar)
app.put('/hospede/:id', controller.atualizar)
app.delete('/hospede/:id', controller.apagar)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Aplicação rodada com sucesso!'
    })
})

db.sync()
    .then(() => {
        app.listen(PORT, local, () => {
            console.log(`Servidor rodando na porta: http://${local}:${PORT}`)
        })
    })
    .catch((error) => {
        console.error('> Erro ao rodas Servidor: ', error)
    })
