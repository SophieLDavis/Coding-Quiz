var startButton = document.querySelector('#start');
var userAnswer = document.querySelector('#choices');
var quizTimer =document.querySelector('#time');
var questions= document.querySelector('#questions');
var title= document.querySelector('#question-title');

//var counter = document.querySelector('#time')
var startScreen= document.querySelector('#start-screen')

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
var startQuiz= function(){
startTimer()
console.log("hi")
startScreen.setAttribute('class', 'hide')
questions.setAttribute('class', 'visible')
questionTitle()
createChoiceList()
}

var questionTitle= function(){
var qTitle=[]
for(i=0; i<title.length; i++); {
qTitle= quizQuestions[i][0]
title.textContent= qTitle;
} 
}



//should createElement create a button?
///var userChoice= 

//


//setAttribute(name, value)

startButton.addEventListener('click', startQuiz);{

}
//variable.addEventListener(event, function)
