const express = require('express')
const app = express()
const cors = require('cors')

const db = require('./db/conn')

const auth = require('./controller/auth.controller')
const cliente = require('./controller/cliente.controller')

const middleware = require('./middleware/auth.middleware')

const PORT = 3000
const hostname = 'localhost'

// ----- midlewares globais -----
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// ----- -----

// ----- ROTAS PÚBLICAS -----
app.post('/cliente', cliente.cadastrar)
app.post('/login', auth.login)
// ----- -----

// ----- ROTAS PRIVADAS -----
app.get('/listar', middleware, cliente.listar)

app.get('/', (req, res) => {
    res.status(200).json({
        api: "Minha API",
        version: "v2025.09.09",
        endpoints: [
          "/api/v1/clientes",
          "/api/v1/produtos",
          "/api/v1/pedidos"
        ]
    })
})

db.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`> servidor rodando na porta http://${hostname}:${PORT}`);
        })
    })
    .catch((err)=>{
        console.error(`> erro ao rodar o servidor: ${err} \n acabou aqui o erro.`);
        
    })