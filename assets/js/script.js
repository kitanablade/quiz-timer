let currentQuestion = 0;
let timeLeft = 30;
let score = 0;
let highscores = 0;
let finished = false;

const startBtn = document.querySelector(".start-button")
const timerElement = document.querySelector(".timer-count");
const question = document.getElementById("question");

const answerBtn = document.getElementsByClassName(".answer-buttons");
const answerBtn1 = document.getElementById("answer-btn-1");
const answerBtn2 = document.getElementById("answer-btn-2");
const answerBtn3 = document.getElementById("answer-btn-3");
const answerBtn4 = document.getElementById("answer-btn-4");

const quesAnsBank = [
  {
    question: "How long did it take for the astronauts to get to the moon?",
    answers: {
      answer1: "4 hours",
      answer2: "4 days",
      answer3: "4 weeks",
      answer4: "1 week",
    },
    correct: "4 days"
  },
  {
    question: "How far is the moon from the earth?",
    answers: {
      answer1: "239,000 mi",
      answer2: "239,000 km",
      answer3: "239 miles",
      answer4: "239,000 feet",
    },
    correct: "answer1",
  },
  {
    question: "Who was the second person to set foot on the moon?",
    answers: {
      answer1: "John Glenn",
      answer3: "Buzz Lightyear",
      answer2: "Alan Shepard",
      answer4: "Buzz Aldrin",
    },
    correct: "answer4"
  },
  //    { "Who was the first person to set foot on the moon?"},
  //     "Who was the second person to set foot on the moon?",
  //     "How tall was the Saturn V moon rocket?"
];

startBtn.addEventListener("click", startGame);
answerBtn1.addEventListener("click", loadquestion);

function loadquestion(){
    question.textContent = quesAnsBank[currentQuestion].question;
    answerBtn1.value = quesAnsBank[currentQuestion].answers.answer1;
    answerBtn2.value = quesAnsBank[currentQuestion].answers.answer2;
    answerBtn3.value = quesAnsBank[currentQuestion].answers.answer3;
    answerBtn4.value = quesAnsBank[currentQuestion].answers.answer4;
    currentQuestion++;
    }

    // The startGame function is called when the start button is clicked
function startGame() {
    loadquestion();
    //finished = false;
    //timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startBtn.disabled = true;
    startTimer()
  }
// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timeLeft--;
      timerElement.textContent = timeLeft;
    //   if (timeLeft >= 0) {
    //     // Tests if win condition is met
    //     if (finished && timeLeft > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       //winGame();
    //     }
    //   }
      // Tests if time has run out
      if (timeLeft === 0) {
        // Clears interval
        clearInterval(timer);
        //loseGame();
      }
    }, 1000);
  }
  //startTimer();