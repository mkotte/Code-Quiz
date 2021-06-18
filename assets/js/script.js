//variables
var timerContainer = document.querySelector('.timer')
var timerEl = document.getElementById('time-left');
var startButton = document.getElementById('start-btn');
var scoreButton = document.getElementById("scores-btn")
var quizSection = document.querySelector(".quizSection")
var quiz =  document.querySelector(".quiz");
var answer = document.querySelector(".answer");
var results = document.querySelector(".results")
var buttonWrapper = document.createElement("div")

var timer;
var timerCount = 75;
var currentQuestion = 0;
var rightAnswers;
var count = 0;
var quizCount = 1;
var score = 0;
var newScore;


function startTimer(){
    //sets timer
    timer = setInterval(function(){
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0){
            clearInterval(timer);
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
    
    if (target === questionArray[count].answer) {
        newScore = score + 15;
    } else {
        newScore = score - 5;  
        timerCount = timerCount - 5;  
    }
    nextQuestion();
};

// stop quiz if time runs out
function endQuiz(){
    stopTimer();
    let results = document.querySelector(".results");
    let finishedMessage = document.createElement("p");
    finishedMessage.textContent = "Congratulations you have finished your code quiz!"
    results.appendChild(finishedMessage);
    let scoreDisplay = document.querySelector(".score");
    scoreDisplay.textContent = `Your Score: ${newScore}`;
    let initialsWrapper = document.createElement("div");
    results.appendChild(initialsWrapper);
    let initialsLabel = document.createElement("label");
    initialsLabel.setAttribute("for","initials");
    initialsLabel.textContent = "Please enter your initials!";
    initialsWrapper.appendChild(initialsLabel)
    let initialsInput = document.createElement("input");
    initialsInput.setAttribute("type","text");
    initialsInput.setAttribute("id", "initials-input");
    initialsInput.setAttribute("name", "initials");
    initialsLabel.append(initialsInput);

    let resetButton = document.createElement('button');
    resetButton.textContent="Enter"
    resetButton.setAttribute("class", "reset-btn")
    initialsWrapper.append(resetButton);

    resetButton.addEventListener("click", function(event){
        event.preventDefault();
        saveScore();
        location.reload();
    })
};

// stopping the timer and adding it to score
function stopTimer(){
        newScore = newScore + timerCount;
        console.log(newScore); 
        console.log(timerContainer)
        removeAllChildNodes(timerContainer)
};

// display results of quiz
function showResults(){
    removeAllChildNodes(timerContainer);
    removeAllChildNodes(quizSection);
};

// saves the score to the local host and allows users to input their name
function saveScore(){
    let initials = document.getElementById("initials-input").value; 
    localStorage.setItem(`initials-${quizCount}`, initials);
    localStorage.setItem(`score-${quizCount}`, newScore);
    newCount = quizCount + 1;
};


function showScore(){
    removeAllChildNodes(timerContainer);
    removeAllChildNodes(quizSection);
    removeAllChildNodes(results);

    let main = document.querySelector(".main");
    let scoresContainer = document.createElement('div');
    main.appendChild(scoresContainer);
    let scoresDescription = document.createElement("h2");
    scoresDescription.textContent = "Your high scores:";
    scoresContainer.appendChild(scoresDescription)

    for (i = 1; i <= quizCount; i++){
        let score = document.createElement('p')
        let scoreInitials = localStorage.getItem('initials-'+i);
        let scoreValue = localStorage.getItem('score-'+i);
        score.textContent = scoreInitials + " " + scoreValue
        scoresContainer.appendChild(score);

    }

    main.appendChild(buttonWrapper);
    let resetButton = document.createElement('button');
    resetButton.textContent="Reset"
    resetButton.setAttribute("class", "reset-btn")
    buttonWrapper.appendChild(resetButton);
    resetButton.addEventListener("click", function(event){
        event.preventDefault();
        location.reload();
    });


};

//removes all html children nodes from the parent parameter
function removeAllChildNodes(parent){
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

scoreButton.addEventListener("click", showScore)
// nextButton.addEventListener("click", nextQuestion);

renderStartPage();