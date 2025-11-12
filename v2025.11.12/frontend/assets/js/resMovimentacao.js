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
    
        const idVendedor = Number(document.getElementById('idVendedor').value)
        const idProduto = Number(document.getElementById('idProduto').value)
        const data = Date(document.getElementById('data').value)
        const quantidade = Number(document.getElementById('qtd').value)
        const tipo = document.getElementById('tipo').value
    
        const dados = {
            idVendedor,
            idProduto,
            data,
            quantidade,
            tipo
        }
    
        fetch('http://localhost:3000/estoque?statusLog='+statusLog , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(valores => {
            if(valores.message == 'Valor maior inserido') {
                return alert(valores.message)
            }

            alert('Dados Cadastrados')
    
            res.style.display = 'flex'
            tbody.innerHTML = `
                <td>${valores.codEstoque}</td>
                <td>${valores.idVendedor}</td>
                <td>${valores.idProduto}</td>
                <td>${valores.data}</td>
                <td>${valores.quantidade}</td>
                <td>${valores.tipo}</td>
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