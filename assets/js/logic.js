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
for(i=0; i<title.length; i++); {
var qTitle= quizQuestions[i]
title.textContent= qTitle;
} 
}

//function to add question choices to page 
var createChoiceList= function(){
var choiceList= document.createElement('ul')
choicesContainer.appendChild(choiceList)
var questionChoices=[]
for(i=0; i<4; i++) {
questionChoices= answers[i]// answers[0], answers[1], answers[2]
var choice= document.createElement('button')
choiceList.appendChild(choice)
choice.textContent= questionChoices
}
}




//setAttribute(name, value)

startButton.addEventListener('click', startQuiz);{

}
//variable.addEventListener(event, function)
