var highScores= document.querySelector('#highscores') 


var getName= localStorage.getItem("name");
var getScore= localStorage.getItem("score");
var hScores= document.createElement('li')
highScores.appendChild(hScores) 
var scoresList= document.querySelector('li') 
var variable= getName + " scored " + getScore
scoresList.innerHTML= variable

//to do
// end game after q 8 
// add more list to hs page

//make an array - max 10- highest to lowest list 
//if score is bigger than lowest number in  array, number is added to array 