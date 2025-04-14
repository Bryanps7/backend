const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const User = require('./model/user')

const PORT = 3000 // endereço TCP
const hostname = 'localhost' // endereço IP = 127.0.0.1

// --------- Configurações do Middleware ---------
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// ---------  ---------
app.get('/', (req, res) => {
    // "HTML"
    // res.send('Hello World')

    // "JSON"
    res.status(200).json({message: 'Hello World!'})
})

// --------- Servidor Rodando ---------
conn.sync()
.then()
.catch()

app.listen(PORT, hostname, () => {
    console.log('Servidor rodando em ' + hostname + ":" + PORT);
})

// ------------------