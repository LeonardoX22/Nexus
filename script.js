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

  
    proximaPergunta();
}



function proximaPergunta() {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    telaQuestionario.style.display = 'none';
    telaResultado.style.display = 'block';


    let personagemFinal = kai;
    if (rhea.pontos > personagemFinal.pontos) {
        personagemFinal = rhea;
    }
    if (jax.pontos > personagemFinal.pontos) {
        personagemFinal = jax;
    }

   
    document.getElementById('resultado-titulo').textContent = `Você é ${personagemFinal.nome}!`;
    document.getElementById('resultado-imagem').src = personagemFinal.imagem;
    document.getElementById('resultado-descricao').textContent = personagemFinal.explicacaoResultado + ` (Sua pontuação final foi: Kai ${kai.pontos}, Rhea ${rhea.pontos}, Jax ${jax.pontos})`;
}


function reiniciarQuiz() {
   
    perguntaAtual = 0;
    kai.pontos = 0;
    rhea.pontos = 0;
    jax.pontos = 0;


    telaResultado.style.display = 'none';
    telaInicial.style.display = 'block';
}

const perguntas = [
    {
        pergunta: "Qual seria sua prioridade numa missão?",
        opcoes: [
            { texto: "Infiltrar e coletar dados sem ser notado", pontuacao: { kai: 1, rhea: 3, jax: 2 } },
            { texto: "Atacar diretamente o inimigo com força total", pontuacao: { kai: 1, rhea: 2, jax: 3 } },
            { texto: "Criar uma estratégia inteligente para o sucesso", pontuacao: { kai: 3, rhea: 1, jax: 2 } }
        ]
    },
    {
        pergunta: "Como você passa seu tempo livre?",
        opcoes: [
            { texto: "Programando novos códigos e hacks", pontuacao: { kai: 3, rhea: 1, jax: 2 } },
            { texto: "Explorando lugares escondidos da cidade", pontuacao: { kai: 1, rhea: 3, jax: 2 } },
            { texto: "Treinando combate e agilidade", pontuacao: { kai: 1, rhea: 2, jax: 3 } }
        ]
    },

 
];