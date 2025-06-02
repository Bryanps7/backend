let res = document.getElementById('res')
let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    const unitario = Number(document.getElementById('unitario').value)
    const quant = Number(document.getElementById('quant').value)
    const nomeProduto = document.getElementById('nomeProduto').value
    const numPedido = Number(document.getElementById('numPedido').value)
    
    const total = (Number(unitario * quant)).toFixed(2)

    const dados = {
        numPedido: numPedido,
        nomeProduto: nomeProduto,
        quant: quant,
        unitario: unitario,
        total: total
    }

    res.innerHTML = ''

    fetch(`http://localhost:3000/pedido`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resp => resp.json())
    .then(valores => {
        console.log(valores)

        res.innerHTML += `Número do Pedido: ${valores.numPedido} <br>`
        res.innerHTML += `Nome do Produto: ${valores.nomeProduto} <br>`
        res.innerHTML += `Quantidade do Produto: ${valores.quant} <br>`
        res.innerHTML += `Valor Unitário do Produto: ${valores.unitario} <br>`
        res.innerHTML += `Total: R$ ${valores.total} <br>`

    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })

})