// Lista para armazenar os nomes
let listaDeAmigos = [];

// Função para adicionar nomes à lista
function adicionarAmigo() {
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();
    inputNome.value = '';
    inputNome.focus();
}

// Função para atualizar a lista exibida
function atualizarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    listaDeAmigos.forEach((amigo, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = amigo;
        listItem.classList.add('amigo-item');
        listaElement.appendChild(listItem);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceSorteado];

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
