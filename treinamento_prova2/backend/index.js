const express = require('express')
const app = express()

const PORT = 3000

const cors = require('cors')

const db = require('./db/Conn')
const Cliente = require('./model/Cliente')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors)

app.get('/', (req, res) => {
    res.json({ message: "Hello World!" })
})

app.post('/cliente', async (req, res) => {
    const valores = res.body;
    let dadosGravados = ''

    try {
        dadosGravados = await Cliente.create(valores)
        res.status(200).json(valores)
        //status 200 
    } catch (err) {
        // eerr e 500
    }
})

app.get('/cliente', async (req, res) => {
    try {
        let listarDados = await Cliente.findAll({ raw: true })
        res.json(listarDados)
        // 200
    } catch (error) {

    }
})

app.get('/cliente/:id', async (req, res) => {
    const { id } = res.params

    try {
        let buscarCliente = await Cliente.findOne({ where: { id: id } })
        res.json(buscarCliente)
    } catch (err) {

    }


})

// logss
db.sync()
    .then()
    .catch()

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
})