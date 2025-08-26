const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

// controller
const usariosController = require('./controller/usuario.controller')

// Middlewares
const logMiddleware = require('./middleware/log.middleware')
const authMiddleware = require('./middleware/auth.middleware')


// --------------- config express -----------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ------------------------------------------------------

app.post('/login', logMiddleware, usariosController.login)

app.get('/usuarios', authMiddleware, usariosController.listar)

app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação rodando!"})
})

// ------------------------------------------------------
app.listen(PORT, hostname, ()=>{
    console.log(`Servidor rodando em http://${hostname}:${PORT}`)
})