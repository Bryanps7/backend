const jwt = require('jsonwebtoken')

// segredo fixo apenas para teste em aula
const SECRET = "minha_senha_super_secreta"

function generateToken(payload) {
    return jwt.sign(payload, SECRET, { expiresIn: "3h" })
}

// verifica e decodifica um token jwt
function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET)
    } catch (err) {
        console.error("Erro ao verificar o token");
        return null
        
    }
}

module.exports = { generateToken, verifyToken}