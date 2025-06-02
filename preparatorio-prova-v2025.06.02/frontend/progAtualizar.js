let res = document.getElementById('res');
let btnAtualizar = document.getElementById('btnAtualizar');

btnAtualizar.addEventListener('click', (e) => {
    e.preventDefault();

    // Captura os valores dos campos do formulário
    const id = document.getElementById('id').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // Validação básica dos campos
    if (!id || !nome || !sobrenome || !cpf || !email || !telefone) {
        res.innerHTML = 'Por favor, preencha todos os campos.';
        return;
    }

    // Criação do objeto com os dados do formulário
    const dados = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        email: email,
        telefone: telefone
    };

    res.innerHTML = 'Atualizando os dados...';

    // Envio dos dados para o backend
    fetch(`http://localhost:3000/hospede/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao atualizar os dados.');
            }
            return resp.json();
        })
        .then(valores => {
            res.innerHTML = `
                <strong>Atualização realizada com sucesso!</strong><br>
                Nome: ${valores.nome} ${valores.sobrenome}<br>
                CPF: ${valores.cpf}<br>
                Email: ${valores.email}<br>
                Telefone: ${valores.telefone}<br>
            `;
        })
        .catch(err => {
            console.error('Erro ao atualizar os dados:', err);
            res.innerHTML = 'Erro ao atualizar os dados. Tente novamente.';
        });
});