const Vendedor = require('../model/Vendedor')

const cadastrar = async (req, res) => {
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha) {
        return res.status(404).json({
            message: "dados incompletos"
        })
    }

    try {
        const dados = await Vendedor.create(valores)

        res.status(201).json(dados)
        console.log('dados registrados');
    } catch (err) {
        res.status(500).json({
            message: 'erro ao realizar função',
            error: err
        })
        console.error('Erro ao realizar função: ', err);
        
    }
}

module.exports = { cadastrar }