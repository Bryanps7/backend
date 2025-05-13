const express = require('express')
const app = express()

const cors = require('cors')

const PORT = 3000

// const Usuario = require('./model/Usuario')
const db = require('./db/Conn')
const Usuarios = require('./model/Usuario')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/listar', (req, res)=> {
    Usuarios.findAll()
    .then((user) => {
        console.log('Usuários:', user.map(user => user.toJSON()));
        res.status(200).json(user);
    })
    .catch((error) => {
        console.error('Erro ao listar:', error);
        res.status(500).json({ error: 'Erro ao listar' });
    });
})

app.get('/buscar/:id', (req, res)=>{
    const { id } = req.params

    Usuarios.findOne({
        where: {
            id
        }
    })
    .then((user)=>{
        if(user) {
            console.log('Usuario Encontrado: ', user.toJSON());
            res.status(200).json(user)
        } else {
            console.log('Usuário não encontrado')
            res.status(404).send('Usuario não encontrado')
        }
    })
    .catch((err)=> {
        console.error("Erro ao buscar usuario", err);
        res.status(500).json({ error: 'Erro ao buscar usuario'})
    })
})

app.post('/cadastrar', (req, res)=>{
    const { nome, altura, peso } = req.body

    Usuarios.create({
        nome,
        altura,
        peso
    })
    .then((user)=>{
        console.log('Usuario cadastrado:', user.toJSON());
        
        res.status(201).json(user)
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar o Usuário: ',err);
        res.status(500).json({ error: 'Erro ao cadastrar Usuário'})
    })
})

app.get('/', (req, res)=>{
    res.status(200).send('Hello World!')
})

db.sync()
.then(()=>{
    console.log("Banco de Dados Conectado");
})
.catch((err)=>{
    console.error("Erro ao conectar o banco de Dados: ", err);
    
})

app.listen(PORT, ()=>{
    console.log(`Servidor Rodando: http://localhost:${PORT}`);
})