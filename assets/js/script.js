let currentQuestionIndex = 0;
let timeLeft = 30;
let score = 0;
let highscores = 0;
let finished = false;

const startBtn = document.querySelector(".start-button");
const timerElement = document.querySelector(".timer-count");
const question = document.getElementById("question");
const answerBtn = document.getElementsByClassName(".answer-buttons");
const statusBoard = document.querySelector(".game-status");
const scoreDisp = document.querySelector(".score");

const answerBtn1 = document.getElementById("answer-btn-1");
const answerBtn2 = document.getElementById("answer-btn-2");
const answerBtn3 = document.getElementById("answer-btn-3");
const answerBtn4 = document.getElementById("answer-btn-4");

function init() {
  answerBtn1.disabled = true;
  answerBtn2.disabled = true;
  answerBtn3.disabled = true;
  answerBtn4.disabled = true;
}

const quesAnsBank = [
  {
    question: "How long did it take for the astronauts to get to the moon?",
    answers: {
      answer1: "4 hours",
      answer2: "4 days",
      answer3: "4 weeks",
      answer4: "1 week",
    },
    correct: "4 days",
  },
  {
    question: "How far is the moon from the earth?",
    answers: {
      answer1: "239,000 mi",
      answer2: "239,000 km",
      answer3: "239 miles",
      answer4: "239,000 feet",
    },
    correct: "239,000 mi",
  },
  {
    question: "Who was the first person to set foot on the moon?",
    answers: {
      answer1: "John Glenn",
      answer3: "Neil Armstrong",
      answer2: "Alan Shepard",
      answer4: "Buzz Aldrin",
    },
    correct: "Neil Armstrong",
  },
  {
    question: "Who was the second person to set foot on the moon?",
    answers: {
      answer1: "John Glenn",
      answer3: "Buzz Lightyear",
      answer2: "Alan Shepard",
      answer4: "Buzz Aldrin",
    },
    correct: "Buzz Aldrin",
  },
  {
    question: "How tall was the Saturn V moon rocket?",
    answers: {
      answer1: "100 ft",
      answer3: "1000 meters",
      answer2: "363 feet",
      answer4: "663 ft",
    },
    correct: "363 feet",
  },
];

startBtn.addEventListener("click", startGame);
//answerBtn1.addEventListener("click");
// answerBtn2.addEventListener("click", checkAnswer);
// answerBtn3.addEventListener("click", checkAnswer);
// answerBtn4.addEventListener("click", checkAnswer);

function loadquestion() {
  question.textContent = quesAnsBank[currentQuestionIndex].question;
  answerBtn1.value = quesAnsBank[currentQuestionIndex].answers.answer1;
  answerBtn2.value = quesAnsBank[currentQuestionIndex].answers.answer2;
  answerBtn3.value = quesAnsBank[currentQuestionIndex].answers.answer3;
  answerBtn4.value = quesAnsBank[currentQuestionIndex].answers.answer4;
}

// The startGame function is called when the start button is clicked
function startGame() {
  answerBtn1.disabled = false;
  answerBtn2.disabled = false;
  answerBtn3.disabled = false;
  answerBtn4.disabled = false;
  loadquestion();
  // Prevents start button from being clicked when round is in progress
  startBtn.disabled = true;
  startTimer();
}
// The setTimer function starts and stops the timer and triggers the end of the quiz
function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timeLeft--;
    timerElement.textContent = (`:${timeLeft}`);
    if (timeLeft >= 0) {
      // Tests if all questions have been answered
      if (finished && timeLeft > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        timerElement.textContent = ":00";
        endGame();
      }
    }
    // Tests if time has run out
    if (timeLeft === 0) {
      // Clears interval
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function checkAnswer(answer) {
  console.log(answer.value);
  if (answer.value == quesAnsBank[currentQuestionIndex].correct) {
    statusBoard.textContent = "🧑‍🚀CORRECT!";
    score++;
    scoreDisp.textContent = score;
  } else {
    statusBoard.textContent = "Sorry, that's wrong.";
  }
  currentQuestionIndex++;
  if (currentQuestionIndex == quesAnsBank.length) {
    finished = true;
    endGame();
  } else {
    loadquestion();
  }
}

function endGame() {

  answerBtn1.disabled = true;
  answerBtn2.disabled = true;
  answerBtn3.disabled = true;
  answerBtn4.disabled = true;
  statusBoard.textContent = "🌕 MISSION COMPLETE 🌕"
}

init();
