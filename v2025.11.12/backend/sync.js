const { Vendedor, Produto, Estoque } = require('./model/rel')

const db = require('./db/conn')

async function syncDataBase() {
    try {
        await db.sync({ force: true })
        console.log('rodando');
    } catch (err) {
        console.error('erro: ', err);
    } finally {
        await db.close()
        console.log('servidor fechado');
    }
}

syncDataBase()