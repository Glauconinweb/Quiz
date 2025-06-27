const questions = [
  {
    question: "O que é sustentabilidade?",
    answers: [
      {
        id: 1,
        text: "Cuidar do planeta usando os recursos com responsabilidade",
        correct: true,
      },
      { id: 2, text: "Gastar toda a água possível", correct: false },
      { id: 3, text: "Cortar todas as árvores", correct: false },
      { id: 4, text: "Usar plástico sem se preocupar", correct: false },
    ],
  },
  {
    question: "Qual é o melhor destino para o lixo reciclável?",
    answers: [
      { id: 1, text: "Jogar no mar", correct: false },
      { id: 2, text: "Queimar no quintal", correct: false },
      { id: 3, text: "Levar para a coleta seletiva", correct: true },
      { id: 4, text: "Enterrar no jardim", correct: false },
    ],
  },
  {
    question: "Por que é importante economizar água?",
    answers: [
      { id: 1, text: "Para ajudar os peixes", correct: false },
      { id: 2, text: "Porque a água pode acabar", correct: true },
      { id: 3, text: "Porque é moda", correct: false },
      { id: 4, text: "Para não se molhar", correct: false },
    ],
  },
  {
    question: "Qual é uma atitude sustentável?",
    answers: [
      { id: 1, text: "Deixar a luz acesa o dia todo", correct: false },
      { id: 2, text: "Plantar árvores", correct: true },
      { id: 3, text: "Jogar lixo no chão", correct: false },
      { id: 4, text: "Poluir os rios", correct: false },
    ],
  },
  {
    question: "O que podemos fazer com papel usado?",
    answers: [
      { id: 1, text: "Jogar fora", correct: false },
      { id: 2, text: "Queimar", correct: false },
      { id: 3, text: "Reutilizar para rascunho", correct: true },
      { id: 4, text: "Molhar e jogar no chão", correct: false },
    ],
  },
  {
    question: "Qual destas ações ajuda o meio ambiente?",
    answers: [
      { id: 1, text: "Desperdiçar comida", correct: false },
      { id: 2, text: "Reutilizar sacolas", correct: true },
      { id: 3, text: "Deixar a torneira aberta", correct: false },
      { id: 4, text: "Jogar pilhas no lixo comum", correct: false },
    ],
  },
  {
    question: "O que significa reciclar?",
    answers: [
      {
        id: 1,
        text: "Reutilizar materiais para novos produtos",
        correct: true,
      },
      { id: 2, text: "Jogar fora", correct: false },
      { id: 3, text: "Guardar em casa para sempre", correct: false },
      { id: 4, text: "Molhar o lixo", correct: false },
    ],
  },
  {
    question: "Qual é a cor da lixeira para papel?",
    answers: [
      { id: 1, text: "Azul", correct: true },
      { id: 2, text: "Verde", correct: false },
      { id: 3, text: "Vermelha", correct: false },
      { id: 4, text: "Amarela", correct: false },
    ],
  },
  {
    question: "Por que devemos plantar árvores?",
    answers: [
      { id: 1, text: "Para cortar madeira", correct: false },
      {
        id: 2,
        text: "Porque deixam o ambiente mais bonito e saudável",
        correct: true,
      },
      { id: 3, text: "Para sujar o chão com folhas", correct: false },
      { id: 4, text: "Para esconder lixo", correct: false },
    ],
  },
  {
    question: "O que é lixo orgânico?",
    answers: [
      { id: 1, text: "Restos de comida e cascas de frutas", correct: true },
      { id: 2, text: "Garrafas plásticas", correct: false },
      { id: 3, text: "Pilhas usadas", correct: false },
      { id: 4, text: "Vidro quebrado", correct: false },
    ],
  },
  {
    question: "Qual dessas atitudes ajuda a natureza?",
    answers: [
      {
        id: 1,
        text: "Deixar a TV ligada sem ninguém assistindo",
        correct: false,
      },
      { id: 2, text: "Desligar a luz ao sair do cômodo", correct: true },
      { id: 3, text: "Tomar banho demorado", correct: false },
      { id: 4, text: "Jogar lixo no rio", correct: false },
    ],
  },
  {
    question: "Qual é o benefício de separar o lixo corretamente?",
    answers: [
      { id: 1, text: "Ajuda na reciclagem", correct: true },
      { id: 2, text: "Faz sujeira", correct: false },
      { id: 3, text: "Atrai insetos", correct: false },
      { id: 4, text: "Polui o solo", correct: false },
    ],
  },
  {
    question: "O que devemos fazer com pilhas usadas?",
    answers: [
      { id: 1, text: "Jogar no lixo comum", correct: false },
      { id: 2, text: "Enterrar", correct: false },
      { id: 3, text: "Levar em ponto de coleta específico", correct: true },
      { id: 4, text: "Jogar no esgoto", correct: false },
    ],
  },
  {
    question: "O que significa reduzir na coleta seletiva?",
    answers: [
      { id: 1, text: "Comprar mais coisas", correct: false },
      { id: 2, text: "Produzir menos lixo", correct: true },
      { id: 3, text: "Acumular objetos", correct: false },
      { id: 4, text: "Desperdiçar materiais", correct: false },
    ],
  },
  {
    question: "Como podemos ajudar o planeta na escola?",
    answers: [
      { id: 1, text: "Jogando papel no chão", correct: false },
      {
        id: 2,
        text: "Desligando luzes que não estão sendo usadas",
        correct: true,
      },
      { id: 3, text: "Rasgando livros", correct: false },
      { id: 4, text: "Grudando chiclete nas carteiras", correct: false },
    ],
  },
  {
    question: "O que é coleta seletiva?",
    answers: [
      { id: 1, text: "Separar o lixo por tipo para reciclar", correct: true },
      { id: 2, text: "Jogar tudo no mesmo saco", correct: false },
      { id: 3, text: "Coletar lixo apenas aos sábados", correct: false },
      { id: 4, text: "Separar só vidro", correct: false },
    ],
  },
  {
    question: "Como economizar energia em casa?",
    answers: [
      { id: 1, text: "Desligando aparelhos quando não usados", correct: true },
      { id: 2, text: "Dormindo com luz acesa", correct: false },
      {
        id: 3,
        text: "Deixando o ventilador ligado o dia todo",
        correct: false,
      },
      { id: 4, text: "Tomando banho quente por 1 hora", correct: false },
    ],
  },
  {
    question: "Por que devemos cuidar do meio ambiente?",
    answers: [
      { id: 1, text: "Para termos um futuro melhor", correct: true },
      { id: 2, text: "Porque é chato", correct: false },
      { id: 3, text: "Para poluir mais", correct: false },
      { id: 4, text: "Porque não tem importância", correct: false },
    ],
  },
  {
    question: "Qual dessas atitudes prejudica o meio ambiente?",
    answers: [
      { id: 1, text: "Economizar energia", correct: false },
      { id: 2, text: "Plantar árvores", correct: false },
      { id: 3, text: "Jogar óleo na pia", correct: true },
      { id: 4, text: "Separar lixo reciclável", correct: false },
    ],
  },
  {
    question: "Como você pode ajudar no dia a dia?",
    answers: [
      { id: 1, text: "Separando o lixo em casa", correct: true },
      { id: 2, text: "Jogar papel no chão", correct: false },
      { id: 3, text: "Ficar com a torneira aberta", correct: false },
      { id: 4, text: "Desligar o freezer à noite", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionHome = 0;
let score = 0;

function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionHome];
  let questionNo = currentQuestionHome + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.dataset.id = answer.id;
    button.classList.add("btn");
    button.addEventListener("click", selecAnswer);
    answerButtons.appendChild(button);
  });
}

function selecAnswer(e) {
  answers = questions[currentQuestionHome].answers;
  const correctAnswer = answers.filter((answer) => answer.correct == true)[0];
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.id == correctAnswer.id;
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function startQuiz() {
  currentQuestionHome = 0;
  score = 0;
  nextButton.innerHTML = "Proxima";
  showQuestion();
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Você acertou ${score} de ${questions.length}! `;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

  const nome = sessionStorage.getItem("usuarioLogado") || "Anônimo";
  salvarScore(nome, score); // 👈 Agora o score vai ser enviado ao backend
}

function blandeNextButton() {
  currentQuestionHome++;
  if (currentQuestionHome < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionHome < questions.length) {
    blandeNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
// ...existing code...

// Troque "/scores" pela URL completa do backend:
async function salvarScore(nome, score) {
  await fetch("/scores", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nome, score }),
  });
}

async function mostrarPlacar() {
  let placarDiv = document.getElementById("placar-top3");
  if (placarDiv) placarDiv.remove();

  const res = await fetch("/scores");
  const top = await res.json();
  placarDiv = document.createElement("div");
  placarDiv.id = "placar-top3";
  placarDiv.innerHTML = "<h2>Top 3 Jogadores</h2>";
  top.forEach((item, idx) => {
    placarDiv.innerHTML += `<p><b>${idx + 1}º</b> ${item.name}: ${
      item.score
    } pts</p>`;
  });
  questionElement.parentNode.appendChild(placarDiv);
}

// No final do quiz, chame salvarScore(usuario.nome, score);
// No final do quiz, chame salvarScore(usuario.nome, score);
