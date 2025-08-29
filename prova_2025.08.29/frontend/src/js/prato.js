const btn = document.getElementById('btn')
const res = document.getElementById('res')

btn.addEventListener('click', (e)=>{
    e.preventDefault()

    const nomePrato = document.getElementById('nome').value
    const categoria = document.getElementById('categoria').value
    const precoBase = document.getElementById('preco').value

    if(!nomePrato || !categoria || !precoBase) {
        alert('Está Faltando alguma Informação!')
    } else {
        const dados = {
            nomePrato,
            categoria,
            precoBase
        }
    
        fetch('http://localhost:3000/prato', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = "ID: " + valores.codPrato + '<br>'
            res.innerHTML += "Nome: " + valores.nomePrato + '<br>'
            res.innerHTML += "Categoria: " + valores.categoria + '<br>'
            res.innerHTML += "Preço: " + valores.precoBase
        })
        .catch((err)=>{
            console.error('Erro ao cadastrar o Prato: ', err);
        })
    }
})


