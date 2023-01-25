var startButton = document.querySelector('#start');
var choicesContainer = document.querySelector('.choices');
var quizTimer = document.querySelector('#time');
var questions = document.querySelector('#questions');
var title = document.querySelector('#question-title')
var startScreen = document.querySelector('#start-screen')
var endScreen = document.querySelector('#end-screen')
var initials = document.querySelector('#initials')
var finalScore = document.querySelector('#final-score')
var clear= document.querySelector('#clear')
var highScores= document.querySelector('#highscores')

//Add question one choices to page 
var createChoiceList = function () {
    var choiceList = document.createElement('ul')
    choicesContainer.appendChild(choiceList)
    for (i = 0; i < 4; i++) {
        var choice = document.createElement('button')
        choice.setAttribute('data-text', questionChoices[0][i])
        choiceList.appendChild(choice)
        choice.textContent = questionChoices[0][i]
    }
}

//show the next question 
currentQuestion = 0
var userChoice = 0;//click event/user choice
var score = 0;
var nextQuestion = function () {
    currentQuestion++
    if (currentQuestion < quizQuestions.length) {
        title.textContent = quizQuestions[currentQuestion];
        //clear choice container and show next set of choices
        choicesContainer.innerHTML = ''
        var choiceList = document.createElement('ul')
        choicesContainer.appendChild(choiceList)
        for (i = 0; i < 4; i++) {
            var choice = document.createElement('button')
            choice.setAttribute('data-text', questionChoices[currentQuestion][i])
            choiceList.appendChild(choice)
            choice.textContent = questionChoices[currentQuestion][i]
        //add final score to end page
        finalScore.innerHTML = score
        if (currentQuestion > quizQuestions.length) 
                endGame() 

    }}}


var counter=0
//first event listener
startButton.addEventListener('click', function () {
    startScreen.setAttribute('class', 'hide')
    questions.setAttribute('class', 'visible')

    //show the first q 
    title.textContent = quizQuestions[0]
    createChoiceList()

    //start timer
    counter = 20
    var runTimer = setInterval(function () {

        quizTimer.textContent = counter
        counter--
          if (counter === 0) {
            endGame()
        }
    }, 1000)
})

//second event listener, when a choice button is clicked 
choicesContainer.addEventListener('click', function (event) {
    console.log(event.target)
    console.log(answers[currentQuestion])
    var target= event.target.getAttribute('data-text')
    if (target=== answers[currentQuestion][0]){
        score++
        console.log(score)
    } else {
        quizTimer.textContent = counter-10
    } nextQuestion()
})

//show quiz 'finish' page
function endGame() {
    questions.setAttribute('class', 'hide')
    endScreen.setAttribute('class', 'visible')
    var textEndScreen = document.createElement('p')
    endScreen.appendChild(textEndScreen)
    textEndScreen.innerHTML = "If you'd like your information to be saved on to the Highscores page, please enter your initials and click the Submit button."
}

//event listener saving initials to local storage
endScreen.addEventListener('click', function () {
    var initialInput = initials[input].value()
    var initial = initialInput.value.trim()
    localStorage.setItem("name", initial)
    localStorage.setItem("score", score)
    //highScores= localStorage.getItem("name", initial);
    //highScores= localStorage.getItem("score", score);
})

//save highscore to Highscores page - local storage 
//save initials to highscores - local storage 
