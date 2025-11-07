const buscar = document.getElementById('buscar')
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


    buscar.addEventListener('click', (e)=>{
        e.preventDefault()
    
        const nome = document.getElementById('nome').value

        fetch(`http://localhost:3000/produto/nome?statusLog=${statusLog}&nome=${nome}`,)
        .then(resp => resp.json())
        .then(valores => {
    
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