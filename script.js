//variables
var timerEl = document.getElementById('time-left');
var startButton = document.getElementById('start-btn');
var quizSection = document.querySelector(".quizSection")
var quiz =  document.querySelector(".quiz");
var answer = document.querySelector(".answer");

var timer;
var timerCount = 75;
var currentQuestion = 0;
var rightAnswers;
var count = 0;
var score = 0;

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
    //event listener for initial start button
    startButton.addEventListener("click", function(event){
        event.preventDefault;
        startTimer();
        startQuiz();
    });

    // quiz instructions
    var quizIntro = document.createElement("p");
    quizIntro.textContent = "Welcome to the code quiz. Answer the questions as quickly and accurately as your able too and don't let the timer run out!"
    quiz.appendChild(quizIntro);
};

function appendQuestion(count) {
    if (count !== 5){
        // questions created here
        var question = document.createElement("p")
        question.textContent = questionArray[count].question
        quizSection.appendChild(question);

        let answersWrapper = document.createElement('div');
        quizSection.appendChild(answersWrapper);
        console.log(1)
        // answers/choices created here
        for (let i = 0; i < 4; i++) {
            let answerButton = document.createElement('button');
            answerButton.setAttribute("class", "answer");
            answerButton.textContent = questionArray[count].answers[i];
            answersWrapper.appendChild(answerButton);
            console.log(1)
            // TODO: add event listener for answer button and then answer evaluation
            answerButton.addEventListener("click", function(event){
                event.preventDefault();
                // console.log(target);
                evalChosenAnswer(event.target.textContent);
                count++;
            }); 
        }
    } else {
        endQuiz();
    }
}


// populate questions here through array
function startQuiz(){ 
    removeAllChildNodes(quizSection);
    startTimer();
    appendQuestion(count);


};

function nextQuestion(){
    removeAllChildNodes(quizSection);
    count++;
    appendQuestion(count);
};

// evaluating the chosen answers truthyness
function evalChosenAnswer(target){
    var newScore;
    if (target === questionArray[count].answer) {
        newScore = score + 15;
    } else {
        newScore = score - 5;    
    }
    nextQuestion();
};

// stop quiz if time runs out
function endQuiz(){
    let results = document.querySelector(".results")
    

};

// display results of quiz
function showResults(){
    
};

// saves the score to the local host and allows users to input their name
function saveScore(){

};


function showScore(){

};

//removes all html children nodes from the parent parameter
function removeAllChildNodes(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// nextButton.addEventListener("click", nextQuestion);

renderStartPage();