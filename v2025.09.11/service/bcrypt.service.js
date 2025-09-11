const bcrypt = require('bcrypt')
const JUMP = 10

async function hashSenha(senha) {
    return await bcrypt.hash(senha, JUMP)
}
async function compareSenha(senha, hash) {
    return await bcrypt.compare(senha, hash);
}

module.exports = { hashSenha, compareSenha }