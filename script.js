// Variáveis para controlar o estado do quiz
let perguntaAtual = 0;

// Referências aos elementos do DOM
const telaInicial = document.getElementById('tela-inicial');
const telaQuestionario = document.getElementById('tela-questionario');
const telaResultado = document.getElementById('tela-resultado');
const perguntaTexto = document.getElementById('pergunta-texto');
const opcoesContainer = document.getElementById('opcoes-container');

// Função para começar o quiz
function iniciarQuiz() {
    telaInicial.style.display = 'none';
    telaQuestionario.style.display = 'block';
    exibirPergunta();
}

// Função para exibir a pergunta atual
function exibirPergunta() {
    const questao = perguntas[perguntaAtual];
    perguntaTexto.textContent = questao.pergunta;
    opcoesContainer.innerHTML = ''; // Limpa opções anteriores

    // Laço de repetição para criar as opções
    questao.opcoes.forEach((opcao, index) => {
        const botao = document.createElement('button');
        botao.textContent = opcao.texto;
        botao.onclick = () => selecionarOpcao(opcao.pontuacao);
        opcoesContainer.appendChild(botao);
    });
}

// Função chamada ao selecionar uma opção
function selecionarOpcao(pontuacao) {
    // Adiciona os pontos aos personagens
    kai.pontos += pontuacao.kai;
    rhea.pontos += pontuacao.rhea;
    jax.pontos += pontuacao.jax;

    // Vai para a próxima pergunta
    proximaPergunta();
}


// Função para avançar para a próxima pergunta ou mostrar o resultado
function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}

// Função para calcular e exibir o resultado final
function exibirResultado() {
    telaQuestionario.style.display = 'none';
    telaResultado.style.display = 'block';

    // Lógica condicional para encontrar o personagem com maior pontuação
    let personagemFinal = kai;
    if (rhea.pontos > personagemFinal.pontos) {
        personagemFinal = rhea;
    }
    if (jax.pontos > personagemFinal.pontos) {
        personagemFinal = jax;
    }

    // Exibe o resultado na tela
    document.getElementById('resultado-titulo').textContent = `Você é ${personagemFinal.nome}!`;
    document.getElementById('resultado-imagem').src = personagemFinal.imagem;
    document.getElementById('resultado-descricao').textContent = personagemFinal.explicacaoResultado + ` (Sua pontuação final foi: Kai ${kai.pontos}, Rhea ${rhea.pontos}, Jax ${jax.pontos})`;
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    // Reseta os pontos e a pergunta atual
    perguntaAtual = 0;
    kai.pontos = 0;
    rhea.pontos = 0;
    jax.pontos = 0;

    // Volta para a tela inicial
    telaResultado.style.display = 'none';
    telaInicial.style.display = 'block';
}