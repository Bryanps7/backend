const { hashPassword, comparePassword } = require('./service/bcrypt.service')

async function principal() {
    const senha = "senha123"

    console.log("Senha original: ", senha);

    const hash = await hashPassword(senha)
    console.log("Hash Gerado: ", hash);

    const verifica = await comparePassword("senha123", hash)

    console.log("Senha Confere? ", verifica);

    const invalida = await comparePassword("senha", hash)

    console.log("Senha Confere? ", invalida);
}

principal()