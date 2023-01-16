var startButton = document.querySelector('#start');
var userAnswer = document.querySelector('#choices');
var quizTimer =document.querySelector('#time');
//var questions= document.querySelector('.hide');
//var counter=100;

//var counter = document.querySelector('#time')
//var startScreen= document.querySelector('#wrapper')


var startTimer= function(){
var counter=100;
var runTimer= setInterval(function() {
quizTimer.textContent = counter 
    counter--
    if (counter<=0) {
    //endGame()
}
}, 1000)
}


//start the timer
function startQuiz(){
startTimer()
console.log("hi")
//questions.setAttribute('class', 'visible')
}



startButton.addEventListener('click', startQuiz);{

}
//variable.addEventListener(event, function)