let res = document.getElementById('res')
let btnListar = document.getElementById('btnListar')

btnListar.addEventListener('click', ()=>{
    fetch(`http://localhost:3000/hospede`)
    .then(resp => resp.json())
    .then(valores => {
        console.log(valores)

        valores.forEach(val => {
            res.innerHTML += `Número do hospede: ${val.id} <br>`
            res.innerHTML += `Nome do Hospede: ${val.nome} <br>`
            res.innerHTML += `Sobrenome do Hospede: ${val.sobrenome} <br>`
            res.innerHTML += `CPF do Hospede: ${val.cpf} <br>`
            res.innerHTML += `EMAIL do Hospede: ${val.email} <br>`
            res.innerHTML += `TELEFONE do Hospede: ${val.telefone} <br>`
            res.innerHTML += `<hr>`
        })

    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados',err)
    })
})