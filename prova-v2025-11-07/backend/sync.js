const { Vendedor, Produto, Estoque } = require('./model/rel')

const db = require('./db/conn')

async function syncDataBase() {
    try {
        await db.sync({force: true})
        console.log('conexão com banco');
    } catch (err) {
        console.error('erro ao sincronizar: ', err);
        
    } finally {
        await db.close()
        console.log('banco fechado');
    }
}

syncDataBase()