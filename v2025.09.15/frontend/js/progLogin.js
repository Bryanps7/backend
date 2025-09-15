let res = document.getElementById('res')

let btnCadastrar = document.getElementById('btnCadastrar')

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    const valores = {
        nome,
        telefone,
        email,
        senha
    }

    fetch(`http://localhost:3000/cliente`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'authorization': 'Bearer ${}'
        },
        body: JSON.stringify(valores)
    })
        .then(resp => resp.json())
        .then(dados =>{
            console.log(dados);
        })
        .catch((err)=>{
            console.error('Erro ao cadastrar os dados: ', err);
            
        })
})