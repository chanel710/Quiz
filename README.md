# Quiz
Javascript Quiz 

HTML 
    <div class="container">
        <div id="start-container">
            <button id ="start-btn" class="start-btn">Start</button>
I orginally setup the HTML to to have the qustions in the HTML file then moved them to JavaScript to be 
able to undertand the functions more in JavaScript. HTMl is easier, however would not able to try the timer
function with the next button. 

I put a div class container, with div id as "start button" with button id as "start-btn", which would identifed 
in my script.js file to start the game. This corresponds with...

var startRef = document.getElementById("start-container"); 
startRef is Start Reference 
docmument.getElementById used a common method used wanting to maninpulate 
or get info from an element in your document. I chose the unique id startRef 
with reference to the "start-container" where I put the start button. 

function toggleDisplay(ref) {
    startRef.style.display = "none";
    questionRef.style.display = "none";
    resultsRef.style.display = "none";
    ref.style.display = "inline-block"; /// show will hide the rest 


    var startBtn = document.querySelector("#start-btn");
    startBtn.addEventListener("click", function () {
    console.log(startBtn);
    loadQuestion(); // call function to load new questions  
    toggleDisplay(questionRef);

    I used the Toggle Display function to hid the start button within in the quiz after the quiz is started. The user will only see it initally when the 
    the first approach the page. After that the button will hidden, once the quiz
    is started. I also added an addeventListener() to execute the funciton. 
    This method allows you to add many events to the same element without 
    ovewriting the existing events. I had to get the exact refernce from my HTML
    document to reference it correctly, which was #start-btn. 
    I also created a variable: var questionRef = document.getElementById("question-container"); to refernce the quetsion container to load the questions. Question-container is the container holding the data for the questions and answer buttons. 

    <div id="question-container" style="display:none;">
            <div id="question">Question</div>
                <div id="answer-buttons" class="btn-grid">
                    <input type="radio" name="q" id = "a" value="a"><label for = "a"></label><br>
                    <input type="radio" name="q" id = "b" value="b"><label for = "b"></label><br>
                    <input type="radio" name="q" id = "c" value="c"><label for = "c"></label><br>
                    <input type="radio" name="q" id = "d" value="d"><label for = "d"></label><br>
                </div>    

    I used the div id "quesiton-container" for easy reference, the div id question. Which is what I used to 
    also reference elemnts in my JavaScript code. 
var questions = [
    { q: "1. In Which HTML element do we put in JavaScript code?", a: "b", answers: ["body", "script", "link", "title"] },
    { q: "2. Which of the following is not a data type of JavaScript?", a: "a", answers: ["function", "string", "boolean", "null"] },
    { q: "3. Which answer describes the keyword This in JavaScript", a: "b", answers: ["answer a", "answer b", "answer c", "answer d"] },
    { q: "4. Which option best describes the const vs. variable used in JavaScript?", a: "c", answers: ["answer a", "answer b", "answer c", "answer d"] },
    { q: "5. Primative values can be used when writing code in JavaScript. Which one not correct?", a: "d", answers: ["answer a", "answer b", "answer c", "answer d"] },

];
    

My variable for the questions I setup initally including the answers and choices. I used radio input type, name= q for quesion. id = a, b, c or d for the corresponding choices with with a label. The value is simlar to the label but
this set the value for attribute of the questions. The label defines the label of input for the elemnt. 



function loadQuestion() {
    var currentQuestion = questions[currentquestionIndex];
    //var answerContainers = startContainer.querySelectorAll('.answers');
    questiondisplayRef.textContent = currentQuestion.q;   //accessing question of 0 
    for (var i = 0; i < currentQuestion.answers.length; i++) { //for loop all answers within question
        answerLabels[i].textContent = currentQuestion.answers[i]; // mirrored the same labels to questions/answers 

In order to get the questions, I used the function loadQuestion ()
var currentQuestion = questions[currentquesitonIndex]; 

However my quesiton would not rendor and this where I ran into issues. I did try to fix this problem. 

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

    I tried to fix the code to complete but was unable to. 

    I only was able to attempt the timer with help from a classmate. I did not include in my code because the questions did not rendor. 
function start_timer() {
    var timer = document.getElementById("myTimer").innerHTML;
    var arr = timer.split(":");
    var sec = arr[2];
    if (sec == 30) {
       alert("Times Up");
        window.location.reload();
            }
            hour--;
            min = 60;
            if (hour < 10) hour = "0" + hour;
        }
        min--;
        if (sec < 30) sec = "0" + sec;
        sec = c = 59;
    } else sec--;
    if (sec < 10) sec = "0" + sec;
    document.getElementById("myTimer").innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(start_timer, 1000);
}


I was hoping to work on it some more to fix the bugs. Here is the hw of what I do have. 