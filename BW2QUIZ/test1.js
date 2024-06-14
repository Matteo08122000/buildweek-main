const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let userScore = 0;
let questionNumber = 0;
let timeLeft = 60;
let timerInterval;

function startQuiz() {
  document.getElementById("question").classList.remove("hidden");
  displayQuestion();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = ` ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      questionNumber++;
      if (questionNumber < questions.length) {
        displayQuestion();
        startTimer();
      } else {
        showResult();
      }
    }
  }, 1000);
}

function displayQuestion() {
  if (questionNumber < questions.length) {
    let currentQuestion = questions[questionNumber];
    document.getElementById("questionText").textContent =
      currentQuestion.question;

    const answers = [...currentQuestion.incorrect_answers];
    const correctIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(correctIndex, 0, currentQuestion.correct_answer);

    answers.forEach((answer, index) => {
      document.getElementById(`label${index}`).textContent = answer;
      document.getElementById(`answer${index}`).value = answer;
      document.getElementById(`answer${index}`).checked = false;
    });

    if (currentQuestion.type === "boolean") {
      document.getElementById("answer2").parentElement.style.opacity = "0";
      document.getElementById("answer3").parentElement.style.opacity = "0";
    } else {
      document.getElementById("answer2").parentElement.style.opacity = "1";
      document.getElementById("answer3").parentElement.style.opacity = "1";
    }
  } else {
    showResult();
  }
  resetFeedback();
}

const colorLabel = document.getElementById("label0");

function changeColor() {
  colorLabel.style.backgroundColor = "red";
}

function resetFeedback() {
  document.getElementById("feedback").textContent = "";
}

function submitAnswer() {
  let selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    let answerValue = selectedAnswer.value;
    let currentQuestion = questions[questionNumber];
    if (answerValue === currentQuestion.correct_answer) {
      userScore++;
      document.getElementById("feedback").textContent = "";
    } else {
      document.getElementById("feedback").textContent = "";
    }
    questionNumber++;
    setTimeout(() => {
      if (questionNumber < questions.length) {
        displayQuestion();
        startTimer();
      } else {
        showResult();
      }
    }, 500);
  } else {
    alert("Seleziona una risposta prima di procedere.");
  }
}

function showResult() {
  clearInterval(timerInterval);
  document.getElementById("question").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById(
    "score"
  ).textContent = `${userScore} su ${questions.length}`;
}

window.addEventListener("load", startQuiz);
document
  .getElementById("submitAnswerButton")
  .addEventListener("click", submitAnswer);
