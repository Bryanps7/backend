const conn = require('./db/conn')
const { Fabricante, Produto, Entrega } = require('./model/rel')

async function syncDataBase() {
    try {
        await conn.sync({force: true})
        console.log('Tabelas criadas e banco de dados sincronizado!!!');
    } catch (err) {
        console.error('Não Foi possivel criar as tabelas e sincronizar: ', err);
    } finally {
        await conn.close()
        console.log('Banco de Dados finalizado!!!!!');
    }
}

syncDataBase()