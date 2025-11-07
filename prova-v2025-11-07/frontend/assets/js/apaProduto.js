const apagar = document.getElementById('apagar')
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


    apagar.addEventListener('click', (e)=>{
        e.preventDefault()
    
        const id = Number(document.getElementById('id').value)
    
        fetch('http://localhost:3000/produto/'+id+'?statusLog='+statusLog , {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(valores => {
            alert('Dados apagados')
    
            res.style.display = 'flex'
            res.innerHTML = 'Dados Apagados'
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