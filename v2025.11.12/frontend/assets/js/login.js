const login = document.getElementById('login')

login.addEventListener('click', (e)=>{
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        email,
        senha
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resp => resp.json())
    .then(valores => {
        console.log(valores);
        
        localStorage.setItem('name', valores.name)
        localStorage.setItem('statusLog', valores.statusLog)
        document.getElementById('logout-section').style.display = 'flex'
        document.getElementById('nameL').innerHTML = valores.name


        alert(valores.message)

    })
    .catch((err)=>{
        console.error('Erro ao fazer o fetch: ', err);
    })

})

const logout = document.getElementById('logout')

logout.addEventListener('click', (e)=>{
    e.preventDefault()

    localStorage.clear()
    window.location.reload()
})