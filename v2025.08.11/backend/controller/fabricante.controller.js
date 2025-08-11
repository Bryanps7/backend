const Fabricante = require('../models/Fabricante')

const cadastrar = async (req,res) => {
    const valores = req.body
    try{
        const dados = await Fabricante.create(valores)
        res.status(201).json(dados)
    }catch(err){
        console.error('Erro ao gravar os Dados!',err)
        res.status(500).json({message: 'Erro ao gravar os Dados!'})
    }
}

const atualizar = async (req,res) => {
    const id = req.params.id
    const valores = req.body
    console.log(id)
    console.log(valores)

    try{
        const VerID = await Fabricante.findByPk(id)
        if(VerID === null){
            console.log(`Fabricante não encontrado!`)
            res.status(404).json({message: `Fabricante não encontrado!`})
        }else{
            await Fabricante.update(valores, ({where: { codFabricante: id}}))
            const dados = await Fabricante.findByPk(id)
            res.status(200).json(dados)
        }
        
    }catch(err){
        console.error('Erro ao atualizar os Dados!',err)
        res.status(500).json({message: 'Erro ao atualizar os Dados!'})
    }
}

const apagar = async (req,res) => {
    const id = req.params.id
    console.log(id)

    try{
        const VerID = await Fabricante.findByPk(id)
        if(VerID === null){
            console.log(`Fabricante não encontrado!`)
            res.status(404).json({message: `Fabricante não encontrado!`})
        }else{
            await Fabricante.destroy({where: { codFabricante: id}})
            res.status(204).json({message: `Dados Excluídos com sucesso!`})
        }
        
    }catch(err){
        console.error('Erro ao apagar os Dados!',err)
        res.status(500).json({message: 'Erro ao apagar os Dados!'})
    }
}

const listar = async (req,res)=>{
    try{
        const dados = await Fabricante.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar os Dados!',err)
        res.status(500).json({message: 'Erro ao listar os Dados!'})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }