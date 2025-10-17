const db = require('./db/conn')
const { Cliente, Suco, Estoque } = require('./model/rel')


async function syncDataBase() {
    try {
        await db.sync({ force: true })
        console.log('funcionou!');
    } catch (err) {
        console.error('Não funcionou: ',err);
    } finally {
        await db.close()
        console.log('banco de dados fechado!');
    }
}

syncDataBase()