var startButton = document.querySelector('#start');
var choicesContainer = document.querySelector('.choices');
var quizTimer =document.querySelector('#time');
var questions= document.querySelector('#questions');
var title= document.querySelector('#question-title')
var startScreen= document.querySelector('#start-screen')

//timer function counts down from 100 
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

//function to run/ start game when startQuiz button is pressed 
var startQuiz= function(){
startTimer()
startScreen.setAttribute('class', 'hide')
questions.setAttribute('class', 'visible')
questionTitle()
createChoiceList()
}

//function to add question to page heading 
var questionTitle= function(){
var qTitle=[]
for(i=0; i<title.length; i++); {
qTitle= quizQuestions[i][0]
title.textContent= qTitle;
} 
}

//function to add question choices to page 
var createChoiceList= function(){
var choiceList= document.createElement('ul')
choicesContainer.appendChild(choiceList)
var questionChoices=[]
for(i=0; i<questionChoices.length; i++) {
questionChoices= quizQuestions[i][1]
console.log("hi")
//console.log(questionChoices)
var choice= document.createElement('li')
choiceList.appendChild(choice)
choice.textContent= questionChoices
//questionChoices.appendChild("li")
}
}
//how do i know that createElement("ul") is created where i want it? i.e in .choices 



//setAttribute(name, value)

startButton.addEventListener('click', startQuiz);{

}
//variable.addEventListener(event, function)
