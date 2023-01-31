 var highScores= document.querySelector('#highscores') 

var getName= localStorage.getItem("name");
var getScore= localStorage.getItem("score");

var hScores= document.createElement('li')
highScores.appendChild(hScores) 
var scoresList= document.querySelector('li') //target list element 
var array= getName + " scored " + getScore
scoresList.innerHTML= array
//scoresList.innerHTML= getScore



// <li> getName : getScore </li>

//make an array - max 10- highest to lowest list 
//if score is bigger than lowest number in  array, number is added to array 