//variables
var timerEl = document.getElementById(time-left);
var startButton = document.getElementById(start-btn);
var timer;
var timerCount = 75;
var currentQuestion;
var rightAnswers;


function startTimer(){
    //sets timer
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0){
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
    startQuiz()
}


// array of objects containting the quiz material
var questionArray = [
    {
        question: "Commonly used data types do not include:",
        answers: ["alerts", "booleans", "numbers", "strings"],
        answer: "alerts"
    },
    {
        question: "The condition of an if/else statement is enclosed within:",
        answers: ["curly braces", "parentheses", "quotations", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: ["booleans", "numbers", "other arrays", "all the above"],
        answer: "all the above"
    },
    {
        question: "String value must be enclosed within ___ when being assigned to variables.",
        answers: ["commas", "curly braces", "parentheses", "quotations"],
        answer: "quotations"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["alerts", "console.log", "JavaScript", "Terminal/Bash"],
        answer: "console.log"
    }
];

// populate questions here through array
function startQuiz()

// stop quiz if time runs out
function endQuiz()

// display results of quiz
function showResults()

startButton.addEventListener("click", startTimer)