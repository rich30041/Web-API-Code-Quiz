var timeElement = document.querySelector("#time");
var wrapperElement = document.querySelector(".wrapper");
var btnElement = document.querySelector("#start");
var divContEL = document.querySelector(".divContainer");
var hElement = document.querySelector("#title");
var oderListEl = document.querySelector("#q-list");
var finishDiv = document.querySelector(".gameover");
var finalScore = document.querySelector("#result");
var errMsg = document.querySelector("#errorSmg");
var initialInput = document.querySelector("#inputInitial").value;
var submitEl = document.querySelector(".btn btn-primary mb-2");
var responsDiv = document.querySelector("#response");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreDisplayName = document.getElementById("highscore-initials");
var highscoreDisplayScore = document.getElementById("highscore-score");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submit");


/**set score and timer*/
var score = 0;
var timer = 60;
var timeCount;
finishDiv.style.display="none";
/**this is the timer funtion which will start counting as soon as the quiz starts*/
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeCount);
              
            timeElement.textContent = timeReset;
             
        }
    }, 1000)
}
 
/**  Here is the event listener to start the timer and hide the quiz button*/
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        finishDiv.style.display="none";
        setupTimer()
        displayQuestions();
    }

})

 
/**declare the index variable for the onclickHandler function**/
var i = 0;

/* Displays the questions, verifies timer not expired, and verifies user choose the correct answer*/
function onclickHandler(event) {
    if(timer<=0){
        clearInterval(timeCount);
        finishDiv.style.display="none";
        displayResult();
    }
    var answerText = event.target.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        score++;
        responsDiv.setAttribute("style", "font-size: 28px; color: green")
        responsDiv.textContent = "Correct";
    } else {
        responsDiv.setAttribute("style", "font-size: 28px; color: red")
        responsDiv.textContent = "Wrong";
        timer = timer - 10;
     }
    
    if (i < questions.length-1 && timer>0 ) {
      i++;
      setTimeout(function () {
      displayQuestions();
      responsDiv.textContent = "";
    }, 1000)
    }else {
        setTimeout(function () {
            responsDiv.textContent = "";
            displayResult();
            clearInterval(timeCount);

        }, 500)
        divContEL.innerHTML = '';
     }
     
    /**Function to display users final score */
    function displayResult() {
        finishDiv.style.display = "flex";
        timer = 0;
        timeElement.textContent = "Time:" + " " + timer;
        var HighScores = score;
        localStorage.getItem(HighScores)
        finalScore.textContent = "You got " + HighScores +" out of " + questions.length + " correct!";
        localStorage.setItem("HighScores", HighScores)

    }
}
 
// On click of the submitScore button, we run the function highscore that saves the score and initials of the user
function highscore(){
 
    if(initialInput.value === "") {
        alert("Initials cannot be blank");
        return false;
    }else{
        var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];

 //       var currentUser = initialInput.value;
        var currentUser = document.querySelector("#inputInitial").value
        console.log(currentUser)
        var currentHighscore = {
            name : currentUser,
            score : score
        };
        wrapperElement.style.display = "none";
        finishDiv.style.display="none"
        highscoreContainer.style.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex";
        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
        generateHighscores();

    }
}    

function generateHighscores(){
    finishDiv.textContent = "";
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }
}

// This function displays the high scores page while hiding all of the other pages from 
function showHighscore(){
    wrapperElement.style.display = "none";
    highscoreContainer.style.display = "flex";
    highscoreDiv.style.display = "block";
    endGameBtns.style.display = "flex";

    generateHighscores();
}
//** This event listner submit the initial and final score to the local storage */
document.addEventListener("submit", function (event) {
    console.log("HERE")
    event.preventDefault();
    var initialInput = document.querySelector("#inputInitial").value;
    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red")
        errMsg.textContent = "Initial input field cannot be empty"
    } else {
        finishDiv.style.display="none";
        errMsg.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
        highscore()
}

})
/**This function will refresh the page and send user back to begining page when go back button is clicked */
function init() {
     location.reload();
 
}
/**This function will  clear initial and score displayed on the final page */
function clearScore() {
    window.localStorage.clear();
    highscoreDisplayName.textContent = "";
    highscoreDisplayScore.textContent = "";
}