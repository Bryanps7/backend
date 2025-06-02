let res = document.getElementById('res')
let btnApagar = document.getElementById('btnApagar')

btnApagar.addEventListener('click', ()=>{
    let id = Number(document.getElementById('id').value)
    res.innerHTML = ''

    fetch(`http://localhost:3000/pedido/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => {
        console.log(resp)
        if(resp.status == 200){
            res.innerHTML += 'Dada apagados com sucesso!'
        }
    })
    .catch((err)=>{
        console.error('Erro ao apagar os dados',err)
    })
})