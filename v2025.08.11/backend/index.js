const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')
const fabricanteController = require('./controller/fabricante.controller')

// ----------------- Midleware -----------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
// ---------------------------------------------

app.post('/fabricante', fabricanteController.cadastrar)
app.put('/fabricante/:id', fabricanteController.atualizar)
app.delete('/fabricante/:id', fabricanteController.apagar)
app.get('/fabricante', fabricanteController.listar)

app.get('/',(req,res)=>{
    res.status(200).json({message:'Aplicação Rodando!!!'})
})

// ---------------------------------------------
conn.sync()
.then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`Servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('Erro de conexão com o banco!',err)
})