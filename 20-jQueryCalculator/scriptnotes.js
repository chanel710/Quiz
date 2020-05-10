//variables for quesstions 
var quesiton = [
    { q: "1. In Which HTML element do we put in JavaScript code?", a: "b", answers: ["body", "script", "link", "title"] },
    { q: "2. Which of the following is not a data type of JavaScript?", a: "a", answers: ["function", "string", "boolean", "null"] },
    { q: "3. Which answer describes the keyword This in JavaScript", a: "b", answers: ["answer a", "answer b", "answer c", "answer d"] },
    { q: "4. Which option best describes the const vs. variable used in JavaScript?", a: "c", answers: ["answer a", "answer b", "answer c", "answer d"] },
    { q: "5. Primative values can be used when writing code in JavaScript. Which one not correct?", a: "d", answers: ["answer a", "answer b", "answer c", "answer d"] },

];
//we start the game 
var score = 0;
var userAnswer = '';
var currentquestionIndex = []; // object 0, 1, 2, 3, 4 

///setup variables for Code Quiz  reference for three containers 
var startRef = document.getElementById("start-container");
var questionRef = document.getElementById("question-container");
var resultsRef = document.getElementById("results-container");
var questiondisplayRef = document.getElementById("question");
var answerbuttonsRef = document.getElementById("answer-buttons");
var nextbuttonRef = document.getElementById("control-container");
var answerInputs = answerbuttonsRef.getElementsByTagName("input"); //array of inputs 
var answerLabels = answerbuttonsRef.getElementsByTagName("label"); // array of label for answers 

function toggleDisplay(ref) {
    startRef.style.display = "none";
    nextbuttonRef.style.display = "block"
    questionRef.style.display = "none";
    resultsRef.style.display = "none";
    ref.style.display = "inline-block"; /// show will hide the rest 
}
//toggleDisplay(questionRef); // calling question ref only will show 
//When I click the start button 
var startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", function () {
    console.log(startBtn);
    loadQuestion(); // call function to load new questions  
    toggleDisplay(questionRef);
});

{
    var nextBtn = document.querySelector("#next-btn");
    nextBtn.addEventListener("click", function () {
        console.log(nextBtn);
        alert("next questions");
        loadQuestions();
        toggleShow(nextbuttonRef);
    });

}

function loadQuestion() {
    var currentQuestion = question[currentquestionIndex];
    var q = question;
    //var answerContainers = startContainer.querySelectorAll('.answers');
    questiondisplayRef.textContent = currentQuestion.q;   //accessing question of 0 
   document.getElementById("question").innerHTML = question.toString();
    for (var i = 0; i < currentQuestions.answers.length; i++) { //for loop all answers within question
        answerLabels[i].textContent = currentQuestion.answers[i]; // mirrored the same labels to questions/answers 
    }
    //function loadquestionInn () {
      //  var currentAnswer = answer[currentanswerIndex];
      //  value = document.getElementsByClassName("answers");
      //  for (var i = 0; i < answers.length; i++) {
      //      if (answers[i].checked) {
      //         answer = answers[i].value;
       //     }
      //  }
      //  if (answer == questions[pos][1]) {
       //     score++;
    //    }
     //   pos++;
     //   loadQuestion();
    //    window.addEventListener("load", rendorQuestion, false);
}