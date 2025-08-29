const btn = document.getElementById('btn')
const res = document.getElementById('res')

btn.addEventListener('click', (e)=>{
    e.preventDefault()

    const nome = document.getElementById('nome').value
    const telefone = document.getElementById('telefone').value
    const email = document.getElementById('email').value

    if(!nome || !telefone || !email) {
        alert('Está Faltando alguma Informação!')
    } else {
        const dados = {
            nome,
            telefone,
            email
        }
    
        fetch('http://localhost:3000/cliente', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = "ID: " + valores.codCliente + '<br>'
            res.innerHTML += "Nome: " + valores.nome + '<br>'
            res.innerHTML += "Telefone: " + valores.telefone + '<br>'
            res.innerHTML += "Email: " + valores.email
        })
        .catch((err)=>{
            console.error('Erro ao cadastrar o Cliente: ', err);
        })
    }
})


