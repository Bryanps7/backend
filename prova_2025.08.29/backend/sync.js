const { Cliente, Prato, Pedido } = require('./model/rel')

const db = require('./db/conn')

async function dataSync() {
    try {
        await db.sync({ force: true })
        console.log('> Sincronização com o Banco concluida');    
    } catch (err) {
        console.error('> Erro ao sincronizar ao banco: ', err);
    } finally {
        db.close()
    }
}

dataSync()