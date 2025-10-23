const { Cliente, Suco, Estoque } = require('./model/rel')

const db = require('./db/conn')

async function syncDatabase() {
    try {
        await db.sync({ force: true })
        console.log('relacionamentos funcionando');
    } catch (err) {
        console.log('erro ao relacionar as tabelas');
    } finally {
        await db.close()
        console.log('finalizado');
    }
}

syncDatabase()