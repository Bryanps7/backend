const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000
const host = 'localhost'

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

app.get('/', (req, res)=> {
    res.send('Hello World!!')
})

db.sync()
.then(()=> {
    app.listen(PORT, host, (req, res)=>{
        console.log(`> Servidor rodando na porta: http://${host}:${PORT}`);
    })
})
.catch((err)=> {
    console.error('> erro ao executar o servidor. :(');
    
})