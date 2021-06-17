//variables
var timerEl = document.getElementById(time-left);
var startButton = document.getElementById(start-btn);
var quiz =  document.querySelector(".quiz")

var timer;
var timerCount = 75;
var currentQuestion = 0;
var rightAnswers;
var count;

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
    
};


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

// renders on page load
function renderStartPage(){

};

// populate questions here through array
function startQuiz(){ 
    quiz.innerHTML = "";

    startTimer();
};

function nextQuestion(){

};

// evaluating the chosen answers truthyness
function evalChosenAnswer(target){
        
};

// stop quiz if time runs out
function endQuiz(){

};

// display results of quiz
function showResults(){
    
};

// saves the score to the local host and allows users to input their name
function saveScore(){

};


function showScore(){

};

startButton.addEventListener("click", startTimer);
nextButton.addEventListener("click", nextQuestion);