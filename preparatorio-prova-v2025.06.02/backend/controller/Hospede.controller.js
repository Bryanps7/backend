const Hospede = require('../model/Hospede')

const cadastrar = async (req, res) => {
    const dados = req.body
    console.log(dados);
    try {
        const valores = await Hospede.create(dados)
        res.status(201).json(valores)
    } catch (error) {
        console.error('> Erro ao cadastrar: ', error)
        res.status(500).json({
            message: 'Erro ao cadastrar'
        })
    }
}

const listar = async (req, res) => {
    try {
        const valores = await Hospede.findAll()
        if (valores) {
            res.status(200).json(valores)
            console.log(valores);
        } else {
            res.status(404).json({
                message: "Dados não encontrados"
            })
            console.log(valores)
        }
    } catch (error) {
        console.error('> Erro ao listar:', error);
        res.status(500).json({
            message: "Erro ao listar"
        })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const dados = req.body

    try {
        const valores = await Hospede.findByPk(id)
        if (valores === null) {
            res.status(404).json({
                message: "Dados não encontrados                                                                              "
            })
            console.log(valores)
        } else {
            await Hospede.update(dados, { where: { id: id } })
            const valores = await Hospede.findByPk(id)
            res.status(200).json(valores)
        }
    } catch (error) {
        console.error('> Erro ao atualizar: ', error);
        res.status(500).json({
            message: 'Erro ao atualizar'
        })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    try {
        const valores = await Hospede.findByPk(id)
        if (valores === null) {
            res.status(404).json({
                message: "Dados não encontrados"
            })
            console.log(valores)
        } else {
            await Hospede.destroy({ where: {id: id}})
            res.status(200).json({
                message: "Dados Excluídos!"
            })
        }
    } catch (error) {
        console.error('> Erro ao excluir dados');
        res.status(500).json({
            message: "Erro ao excluir dados"
        })        
    }
}


module.exports = {cadastrar, listar, atualizar, apagar};