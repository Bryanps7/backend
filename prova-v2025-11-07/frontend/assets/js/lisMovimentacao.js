const res = document.getElementById('res')
const tbody = document.getElementById('tbody')

const statusLog = localStorage.getItem('statusLog')

if (statusLog !== 'true') {
    alert('Faça o Login primeiro!')
    window.location.href = './index.html'
} else {
    const name = localStorage.getItem('name')

    document.getElementById('logout-section').style.display = 'flex'
    document.getElementById('nameL').innerHTML = name

    window.addEventListener('load', (e) => {
        e.preventDefault()

        fetch('http://localhost:3000/estoque?statusLog=' + statusLog)
            .then(resp => resp.json())
            .then(valores => {
                res.style.display = 'flex'
                tbody.innerHTML = ''

                for (let i = 0; i < valores.length; i++) {
                    tbody.innerHTML += `
                    <tr>    
                        <td>${valores[i].codEstoque}</td>
                        <td>${valores[i].vendedorEst.nome}</td>
                        <td>${valores[i].produtoEst.nome}</td>
                        <td>${valores[i].data}</td>
                        <td>${valores[i].quantidade}</td>
                        <td>${valores[i].tipo}</td>
                    </tr>    
                    `

                    
                }

            })
            .catch((err) => {
                console.error('Erro ao fazer o fetch: ', err);
            })

    })
}

const logout = document.getElementById('logout')

logout.addEventListener('click', (e) => {
    e.preventDefault()

    localStorage.clear()
    window.location.reload()
})