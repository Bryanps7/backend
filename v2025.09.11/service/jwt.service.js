const jwt = require('jsonwebtoken')
const SECRET = 'cu_do_cunha'

function gerarToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: '3h' })
}

function verificarToken(token) {
    try {
        return jwt.verify(token, SECRET)
    } catch (err) {
        console.error('> erro ao verificar o token', err);
        return null
    }
}

module.exports = { gerarToken, verificarToken }