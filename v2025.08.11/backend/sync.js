const conn = require('./db/conn')
const { Fabricante, Produto, Entrega } = require('./models/rel')

async function syncDataBase() {
    try{
        await conn.sync({force: true})
        console.log('Tabelas sincronizadas!')
    }catch(err){
        console.error('Erro na sincronização das tabelas',err)
    }finally{
        await conn.close()
    }
}

syncDataBase()