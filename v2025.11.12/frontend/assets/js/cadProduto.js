const cadastrar = document.getElementById('cadastrar')
const res = document.getElementById('res')
const tbody = document.getElementById('tbody')

const statusLog = localStorage.getItem('statusLog')

if(statusLog !== 'true') {
    alert('Faça o Login primeiro!')
    window.location.href = './index.html'
} else {
    const name = localStorage.getItem('name')

    document.getElementById('logout-section').style.display = 'flex'
    document.getElementById('nameL').innerHTML = name


    cadastrar.addEventListener('click', (e)=>{
        e.preventDefault()
    
        const nome = document.getElementById('nome').value
        const marca = document.getElementById('marca').value
        const quantidade = Number(document.getElementById('qtd').value)
        const precoUni = Number(document.getElementById('preco').value)
    
        const dados = {
            nome,
            marca,
            quantidade,
            precoUni
        }
    
        fetch('http://localhost:3000/produto?statusLog='+statusLog , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(valores => {
            alert('Dados Cadastrados')
    
            res.style.display = 'flex'
            tbody.innerHTML = `
                <td>${valores.codProduto}</td>
                <td>${valores.nome}</td>
                <td>${valores.marca}</td>
                <td>${valores.quantidade}</td>
                <td>${valores.precoUni}</td>
            `
    
        })
        .catch((err)=>{
            console.error('Erro ao fazer o fetch: ', err);
        })
    
    })
}

const logout = document.getElementById('logout')

logout.addEventListener('click', (e)=>{
    e.preventDefault()

    localStorage.clear()
    window.location.reload()
})