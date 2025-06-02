let res = document.getElementById('res')
let btnListar = document.getElementById('btnListar')

btnListar.addEventListener('click', ()=>{
    fetch(`http://localhost:3000/pedido`)
    .then(resp => resp.json())
    .then(valores => {
        console.log(valores)

        valores.forEach(val => {
            res.innerHTML += `Número do Pedido: ${val.numPedido} <br>`
            res.innerHTML += `Nome do Produto: ${val.nomeProduto} <br>`
            res.innerHTML += `Quantidade do Produto: ${val.quant} <br>`
            res.innerHTML += `Valor Unitário do Produto: ${val.unitario} <br>`
            res.innerHTML += `Total: R$ ${val.total} <br>`
            res.innerHTML += `<hr>`
        })

    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })
})