let res = document.getElementById('res');
let btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', (e) => {
    e.preventDefault();

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // Validação básica dos campos
    if (!nome || !sobrenome || !cpf || !email || !telefone) {
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

    res.innerHTML = 'Enviando os dados...';

    // Envio dos dados para o backend
    fetch(`http://localhost:3000/hospede`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao cadastrar os dados.');
            }
            return resp.json();
        })
        .then(valores => {
            res.innerHTML = `
                <strong>Cadastro realizado com sucesso!</strong><br>
                Nome: ${valores.nome} ${valores.sobrenome}<br>
                CPF: ${valores.cpf}<br>
                Email: ${valores.email}<br>
                Telefone: ${valores.telefone}<br>
            `;
        })
        .catch(err => {
            console.error('Erro ao cadastrar os dados:', err);
            res.innerHTML = 'Erro ao cadastrar os dados. Tente novamente.';
        });
});