// document.getElementById('cadastrar').addEventListener('click', () => {
//     let nome = document.getElementById('nome').value
//     let altura = document.getElementById('altura').value
//     let peso = document.getElementById('peso').value


//     console.log(nome);

//     const dados = {
//         nome: nome,
//         altura: altura,
//         peso: peso
//     }

//     fetch('http://localhost:3000/cadastrar', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(dados)
//     })
//         .then(response => response.json())
//         .then(data => {
//             alert("Usuário Cadastrado", data);
//         })

// })

// document.getElementById('buscar').addEventListener('click', () => {
//     let response = document.getElementById('response')
//     const id = document.getElementById('id').value

//     fetch('http://localhost:3000/buscar/' + id, {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .then(response => response.json())
//         .then(dados => {
//             response.innerHTML = dados.nome + '<br>'
//             response.innerHTML += dados.altura + '<br>'
//             response.innerHTML += dados.peso + '<br>'
//             response.innerHTML += "IMC:" + dados.peso / (dados.altura * dados.altura) + '<br>'
//         })
// })

document.getElementById('listar').addEventListener('click', () => {
    fetch('http://localhost:3000/listar')
    .then(response => response.json())
    .then(data => {
            let response = document.getElementById('response');
            data.forEach(user => {
                let li = document.createElement('li');
                li.innerHTML = `${user.nome} - ${user.altura} - ${user.peso} <br>`;
                response.appendChild(li);
            });
        })
        .catch(error => console.error('Error:', error));
})