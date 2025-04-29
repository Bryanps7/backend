// troca de mensagem
const express = require('express')
const app = express()

// permissões de acesso
const cors = require('cors')

// Config do servidor
const PORT = 3000
const hostname = 'localhost' // localhost ou IP ( 127.0.0.1 )

// chamando modulo do db
const Cliente = require('./model/Cliente')
const db = require('./db/Conn')

// ----- <MDDLEWARE> ----- //
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// ----- </MDDLEWARE> ----- //

// ----- <TESTE DE SERVIDOR> ----- //
app.get('/', (req, res)=>{
    res.status(200).send('Hello World!')
})
// ----- </TESTE DE SERVIDOR> ----- //

// ----- <DB> ----- //
db.sync()
.then(()=>{
    console.log(`| Servidor rodando em http://${hostname}:${PORT}`);
    console.log('');
    
})
.catch((err)=>{
    console.error('| Erro de Conexão ao DB', err);
})
// ----- </DB> ----- //

app.listen(PORT, hostname, ()=>{
    console.log(`Servidor rodando: https://${hostname}:${PORT}`);
})