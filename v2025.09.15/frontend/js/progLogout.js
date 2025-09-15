let res = document.getElementById('res')

res.innerHTML = ''
res.innerHTML += 'Logout com sucesso!'

sessionStorage.clear()

setTimeout(()=>{
    locatiom.href = ''
})