const express = require('express')
const cors = require('cors')
const logMiddleware = require('./middleware/log.middleware')
const app = express()

const PORT = 3000
const hostname = 'localhost'

//controller
const controller = require('./controller/usuarios.controller')

//middlerwares
const logMiddleware = require('./middleware/log.middleware')

// config express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// --------------

app.post("/login", logMiddleware, controller.login)

app.get('/', (req, res) => {
    res.status(200).json({message: "Aplicação Rodando!"})
})

app.listen(PORT, hostname, () => {
    console.log(`Servidor rodando em ${hostaname}:${PORT}`);

})