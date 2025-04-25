// Manipulação de Estilo
const textoEstilo = document.getElementById('texto-estilo');
const botaoCor = document.getElementById('botao-cor');

botaoCor.addEventListener('click', function() {
    const cores = ['red', 'green', 'blue', 'orange', 'purple'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    textoEstilo.style.color = corAleatoria;
});

// Manipulação de Eventos
const botaoAlerta = document.getElementById('botao-alerta');
const campoTexto = document.getElementById('campo-texto');
const textoDigitado = document.getElementById('texto-digitado');

botaoAlerta.addEventListener('click', function() {
    alert('Você clicou no botão de alerta!');
});

campoTexto.addEventListener('input', function() {
    textoDigitado.textContent = 'Você digitou: ' + campoTexto.value;
});

// Interação com o Usuário
const campoNome = document.getElementById('nome');
const botaoSaudacao = document.getElementById('botao-saudacao');
const saudacaoTexto = document.getElementById('saudacao');

botaoSaudacao.addEventListener('click', function() {
    const nome = campoNome.value.trim();
    if (nome) {
        saudacaoTexto.textContent = 'Olá, ' + nome + '!';
    } else {
        saudacaoTexto.textContent = 'Por favor, digite seu nome.';
    }
});