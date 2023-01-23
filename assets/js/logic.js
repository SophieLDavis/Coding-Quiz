var startButton = document.querySelector('#start');
var choicesContainer = document.querySelector('.choices');
var quizTimer =document.querySelector('#time');
var questions= document.querySelector('#questions');
var title= document.querySelector('#question-title')
var startScreen= document.querySelector('#start-screen')

//Add question one choices to page 
var createChoiceList= function(){
var choiceList= document.createElement('ul')
choicesContainer.appendChild(choiceList)
for(i=0; i<4; i++) { 
var choice= document.createElement('button')
choiceList.appendChild(choice)
choice.textContent= answers[0][i]
}}
//show the next question 
currentQuestion=0
var nextQuestion= function() {
currentQuestion++
if (currentQuestion< quizQuestions.length) {
title.textContent= quizQuestions[currentQuestion];
//clear choice container and show next set of choices
choicesContainer.innerHTML=''
var choiceList= document.createElement('ul')
choicesContainer.appendChild(choiceList)
for(i=0; i<4; i++) { 
var choice= document.createElement('button')
choiceList.appendChild(choice)
choice.textContent= answers[currentQuestion][i]
} 
}}

//first event listener
startButton.addEventListener('click', function() {
startScreen.setAttribute('class', 'hide')
questions.setAttribute('class', 'visible')

//show the first q 
title.textContent= quizQuestions[0]
createChoiceList()

//start timer
var counter=100;
var runTimer= setInterval(function() {
quizTimer.textContent = counter 
counter--
if (counter<=0) {
//endGame()
}
}, 1000)
})

//second event listener, when a choice button is clicked 
choicesContainer.addEventListener('click',function() {
nextQuestion()
})

//Another click event listener for choices
//    Check answer
//        if correct, add 1 to score, call nextQuestion()
//        if wrong, remove 10 seconds from the interval, call nextQuestion

//when button is clicked, answer[0][i] is replaced with [0][i+3]