var startButton = document.querySelector('#start');
var choicesContainer = document.querySelector('.choices');
var quizTimer =document.querySelector('#time');
var questions= document.querySelector('#questions');
var title= document.querySelector('#question-title')
var startScreen= document.querySelector('#start-screen')
var endScreen= document.querySelector('#end-screen')
var initials= document.querySelector('#initials')
var finalScore= document.querySelector('#final-score')

//Add question one choices to page 
var createChoiceList= function(){
var choiceList= document.createElement('ul')
choicesContainer.appendChild(choiceList)
for(i=0; i<4; i++) { 
var choice= document.createElement('button')
choiceList.appendChild(choice)
choice.textContent= questionChoices[0][i]
}}

//show the next question 
currentQuestion=0
var userChoice=0;//click event/user choice
var score=0;
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
choice.textContent= questionChoices[currentQuestion][i] 

//check if chosen answer is correct, add 1 to score
} if (userChoice===answers[currentQuestion]){ 
console.log('correct')
score++
//nextQuestion()
//check if chosen answer is incorrect, remove 10 seconds from the interval
} if (userChoice!=answers[currentQuestion]){
console.log('incorrect')
//counter-10 //counter is not defined 
//nextQuestion()

//add final score to end page
finalScore.innerHTML= score 
}
}
}

//first event listener
startButton.addEventListener('click', function() {
startScreen.setAttribute('class', 'hide')
questions.setAttribute('class', 'visible')

//show the first q 
title.textContent= quizQuestions[0]
createChoiceList()

//start timer
var counter=10
var runTimer= setInterval(function() {
quizTimer.textContent = counter 
counter--
if (counter===0) {
endGame()
}
}, 1000)
})

//second event listener, when a choice button is clicked 
choicesContainer.addEventListener('click',function() {
nextQuestion()
})

//show quiz 'finish' page
function endGame(){
questions.setAttribute('class', 'hide')
endScreen.setAttribute('class', 'visible')
var textEndScreen= document.createElement('p')
endScreen.appendChild(textEndScreen)
textEndScreen.innerHTML= "If you'd like your information to be saved on to the Highscores page, please enter your initials and click the Submit button."
}




/* endScreen.addEventListener('click',function() {
var initialInput= initials[input].value() // how to access #input=text (’input[name=”test”]’)
var initial = initialInput.value.trim()

var userSave= 0
alert("Would you like to save your score on the Highscores board?")
if (true){
    localStorage.setItem.keyName(score, initial)

    localstorage.get/setItem.keyName(key, key)

saveHighscore(initial)
redirect to highscore page

*/