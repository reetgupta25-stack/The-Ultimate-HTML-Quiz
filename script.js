const quizData = [
  
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "None"
    ],
    correct: 0
  },
  {
    question: "Which tag is used for paragraph?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    correct: 0
  },
  {
    question: "Which tag is used for image?",
    options: ["<img>", "<image>", "<src>", "<pic>"],
    correct: 0
  },
  {
    question: "Which tag is for heading?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    correct: 1
  },
  {
    question: "Which tag creates a link?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
  },
  {
    question: "What is the correct way to start an HTML document?",
    options: ["<html>", "<head>", "<!DOCTYPE html>", "<body>"],
    correct: 2
  },
  {
    question: "Which tag is used to create a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    correct: 1
  },
  {
    question: "Which attribute is used for image alternate text?",
    options: ["title", "alt", "src", "href"],
    correct: 1
  },
  {
    question: "Which tag is used for unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },
  {
    question: "Which tag is used for table row?",
    options: ["<td>", "<tr>", "<th>", "<row>"],
    correct: 1
  },
  {
    question: "Which tag defines the title of a webpage?",
    options: ["<meta>", "<title>", "<head>", "<header>"],
    correct: 1
  },
  {
    question: "Where is the <title> tag placed?",
    options: ["<body>", "<footer>", "<head>", "<html>"],
    correct: 2
  },
  {
    question: "Which attribute specifies the URL of a link?",
    options: ["src", "href", "url", "link"],
    correct: 1
  },
  {
    question: "Which tag is used for ordered list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    correct: 1
  },
  {
    question: "Which tag is used for checkbox input?",
    options: [
      "<input type='check'>",
      "<checkbox>",
      "<input type='checkbox'>",
      "<check>"
    ],
    correct: 2
  }
]
;

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("next");
const finalScore = document.getElementById("final-score");


startBtn.onclick = () => {
  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  loadQuestion();
};


function loadQuestion() {
  let q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  selectedAnswer = null;

  answerBtns.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.style.background = "";
    btn.disabled = false;
  });
}


answerBtns.forEach((btn, index) => {
  btn.onclick = () => {
    if (selectedAnswer !== null) return;

    selectedAnswer = index;
    let correctIndex = quizData[currentQuestion].correct;

    answerBtns.forEach((b, i) => {
      if (i === correctIndex) {
        b.style.background = "lightgreen";
      } else if (i === index) {
        b.style.background = "salmon";
      }
      b.disabled = true;
    });
  };
});


nextBtn.onclick = () => {
  if (selectedAnswer === null) {
    alert("Select an answer first!");
    return;
  }

  if (selectedAnswer === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";
  finalScore.innerText = "Your Score: " + score + "/" + quizData.length;
}

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  resultScreen.style.display = "none";
  startScreen.style.display = "block";
};
