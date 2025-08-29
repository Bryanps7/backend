const btnCreate = document.getElementById('btn-cadastrar')
const resCreate = document.getElementById('res-cadastrar')

btnCreate.addEventListener('click', (e) => {
    e.preventDefault()

    const idCliente = Number(document.getElementById('clienteC').value)
    const idPrato = Number(document.getElementById('pratoC').value)
    const dataPedido = document.getElementById('dateC').value
    const quantidade = Number(document.getElementById('quantidadeC').value)
    const valorTotal = Number(document.getElementById('valorC').value)

    if (!idCliente || !idPrato || !dataPedido || !quantidade || !valorTotal) {
        alert('Está Faltando alguma Informação!')
    } else {
        const dados = {
            idCliente,
            idPrato,
            dataPedido,
            quantidade,
            valorTotal
        }

        fetch('http://localhost:3000/pedido', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(dados)
        })
            .then(resp => resp.json())
            .then(valores => {
                resCreate.innerHTML = "ID: " + valores.codPedido + '<br>'
                resCreate.innerHTML += "Cliente: " + valores.idCliente + '<br>'
                resCreate.innerHTML += "Prato: " + valores.idPrato + '<br>'
                resCreate.innerHTML += "Data: " + valores.dataPedido + '<br>'
                resCreate.innerHTML += "Quantidade: " + valores.quantidade + '<br>'
                resCreate.innerHTML += "Valor Total: " + valores.valorTotal
            })
            .catch((err) => {
                console.error('Erro ao cadastrar o Pedido: ', err);
            })
    }
})

const btnListen = document.getElementById('btn-listar')
const table = document.getElementById('tbody')

btnListen.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/pedido')
        .then(resp => resp.json())
        .then(valores => {
            table.innerHTML = ''
            valores.forEach(pedido => {
                table.innerHTML += `
                    <tr>
                        <th>${pedido.codPedido}</th>
                        <td>${pedido.idCliente}</td>
                        <td>${pedido.idPrato}</td>
                        <td>${pedido.dataPedido}</td>
                        <td>${pedido.quantidade}</td>
                        <td>${pedido.valorTotal}</td>

                    </tr>
                `
            });
        })
        .catch((err) => {
            console.error('Erro ao cadastrar o Pedido: ', err);
        })
})

const btnUpdate = document.getElementById('btn-atualizar')
const resUpdate = document.getElementById('res-atualizar')

btnUpdate.addEventListener('click', (e) => {
    e.preventDefault()
    const codPedido = Number(document.getElementById('idU').value)

    const idCliente = Number(document.getElementById('clienteU').value)
    const idPrato = Number(document.getElementById('pratoU').value)
    const dataPedido = document.getElementById('dateU').value
    const quantidade = Number(document.getElementById('quantidadeU').value)
    const valorTotal = Number(document.getElementById('valorU').value)

    if (!codPedido || !idCliente || !idPrato || !dataPedido || !quantidade || !valorTotal) {
        alert('Está Faltando alguma Informação!')
    } else {
        const dados = {
            idCliente,
            idPrato,
            dataPedido,
            quantidade,
            valorTotal
        }

        fetch('http://localhost:3000/pedido/' + codPedido, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(dados)
        })
            .then(resp => resp.json())
            .then(valores => {
                resUpdate.innerHTML = "ID: " + valores.codPedido + '<br>'
                resUpdate.innerHTML += "Cliente: " + valores.idCliente + '<br>'
                resUpdate.innerHTML += "Prato: " + valores.idPrato + '<br>'
                resUpdate.innerHTML += "Data: " + valores.dataPedido + '<br>'
                resUpdate.innerHTML += "Quantidade: " + valores.quantidade + '<br>'
                resUpdate.innerHTML += "Valor Total: " + valores.valorTotal
            })
            .catch((err) => {
                console.error('Erro ao Atualizar o Pedido: ', err);
            })
    }
})

const btnDelete = document.getElementById('btn-apagar')
const resDelete = document.getElementById('res-apagar')

btnDelete.addEventListener('click', (e) => {
    e.preventDefault()
    const codPedido = Number(document.getElementById('idD').value)

    if (!codPedido) {
        alert('Está Faltando alguma Informação!')
    } else {

        fetch('http://localhost:3000/pedido/' + codPedido, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json"
            }
        })
            .then(resp => resp.json())
            .then(valores => {
                resDelete.innerHTML = valores.message
            })
            .catch((err) => {
                console.error('Erro ao Atualizar o Pedido: ', err);
            })
    }
})