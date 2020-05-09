///setup variables for Code Quiz   
//When I click the start button
var startBtn = document.querySelector("#start");
startBtn.addEventListener("click", function () {
    Question();
    start_timer();
});
///A timer starts 
function start_timer() {
    var timer = document.getElementById("myTimer").innerHTML;
    var arr = timer.split(":");
    var hour = arr[0];
    var min = arr[1];
    var sec = arr[2];
    if (sec == 0) {
        if (min == 0) {
            if (hour == 0) {
                alert("Times Up");
                window.location.reload();
            }
            hour--;
            min = 60;
            if (hour < 10) hour = "0" + hour;
        }
        min--;
        if (min < 10) min = "0" + min;
        sec = c = 59;
    } else sec--;
    if (sec < 10) sec = "0" + sec;
    document.getElementById("myTimer").innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(start_timer, 1000);
}
//Presented with a Question, When I answer a question, presented with another question/When I answer the question 
//incorrectly then time is subtracted from the clock 
//When all the questions are answered the timer reaches 0 
//Then the game is over I can save my initals and score 
var quesitons = '' [

]


class Questions {
    constructor(text, options, result) {
        this.text = text;
        this.options = options;
        this.result = result;
    }
}

Question.prototype.correctAnswer = function(option) {
    return option === this.result;
}

function populate () {
    if (quiz.isEnded() ) {
    }
    else {
        //show questions 
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //choices
        var options = quiz.getQuestionIndex().options;
        for(var i = 0; i< choices.length; i++) {
            var element = docment.getElementbyId("options" + i);
            element.innerHTML = options[i];
        }
    
        class Quiz {
            constructor(questions) {
                this.score = 0;
                this.questions = quesitons;
                this.getQuestionIndex = 0;
            }
            isEnded() {
                return this.quesitons.length === this.questions.Index;
            }
        }

Quiz.prototype.getQuestionIndex = function() {
    return this.quesitons[this.getQuestionIndex]
} 


Quiz.prototype.guess = funciton(answer) 
    this.questionIndex++;

    if(this.getQuestionIndex().correctResult(result)) {

    }
}







//setup Event listners for buttons 
//You are required to submit the following for review:
// The URL of the functional, deployed application.
//The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
