const express = require('express')
const cors = require('cors')
const app = express()

const PORT = 3000
const HOST = 'localhost'

const db = require('./db/conn')
const Fabricante = require('./controller/fabricante.controller')
const Entrega = require('./controller/entrega.controller')
const Produto = require('./controller/produto.controller')

// -------------
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// -------------

app.post('/fabricante', Fabricante.cadastrar)
app.get('/fabricante', Fabricante.listar)
app.delete('/fabricante/:id', Fabricante.apagar)
app.put('/fabricante/:id', Fabricante.atualizar)

app.post('/entrega', Entrega.cadastrar)
app.get('/entrega', Entrega.listar)
app.delete('/entrega/:id', Entrega.apagar)
app.put('/entrega/:id', Entrega.atualizar)

app.post('/produto', Produto.cadastrar)
app.get('/produto', Produto.listar)
app.delete('/produto/:id', Produto.apagar)
app.put('/produto/:id', Produto.atualizar)

app.get('/', (req, res)=> {
    res.send('Hello World!')
})

db.sync()
.then(()=>{
    app.listen(PORT, HOST, (req, res)=>{
        console.log(`> servidor rodando na porta: http://${HOST}:${PORT}`);
    })
})