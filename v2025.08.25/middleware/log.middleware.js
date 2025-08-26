const fs = require('fs')
const path = require('path')

function logMiddleware(req, res, next) {

    const dataAtual = new Date().toLocaleDateString('pt-BR') // 26/08/2025
    const horaAtual = new Date().toLocaleTimeString('pt-BR') // 07:39:32

    let messagem = ` `

    if ((req.path.startsWith('/usuarios')) || (req.path.startsWith('/login'))) {
        // pasta de logs na raiz do projeto

        messagem = `Entrou na rota ${req.path}
                    no dia ${dataAtual} às ${horaAtual}
                    com o método ${req.method}`


        

        const logDir = path.join(__dirname, "..", "logs")

        if (fs.existsSync(logDir) === false) {
            fs.mkdir(logDir)
        }

        const dataFormatada = new Date().toLocaleDateString('pt-BR').replace(/\//g, "-") // 26/08/2025
        const nomeArquivo = `log_${dataFormatada}.txt`
        const logFile = path.join(logDir, nomeArquivo)

        // escreve o arquivo

        fs.appendFile(logFile, messagem + "\n", (err) => {
            if(err) {
                console.error("Erro ao salvar no arquivo log: ", err);
                
            }
        })
    }

    const nomeArquivo = `log_${dataFormatada}`

    next()
}

module.exports = logMiddleware