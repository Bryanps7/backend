const { generateToken, verifyToken } = require('./service/jwt.service')

function principal() {
    const payload = { id: 1, nome: "Bryan Prinz", email: "bryanprinz2008@gmail.com" }

    console.log("Payload Original", payload);

    const token = generateToken(payload)
    console.log("token gerado: ", token);

    const decoded = verifyToken(token)

    console.log("Token válido: ", decoded);

    const fakeToken = token.slice(0, -1) + "x" // simula o token adulterado

    const invalido = verifyToken(fakeToken)
    console.log("token inválido: ", invalido);
}

principal()