const cadastrar = document.getElementById('cadastrar')

cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const dados = {
        nome,
        email,
        senha
    }

    fetch('http://localhost:3000/vendedor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(resp => resp.json())
    .then(valores => {
        alert('Dados Cadastrados')

        window.location.href = './index.html'

    })
    .catch((err)=>{
        console.error('Erro ao fazer o fetch: ', err);
    })

})