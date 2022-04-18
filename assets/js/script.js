var timerEl = document.getElementById("timer");
var timeLeft = 15;
var startQuizBtnEl = document.getElementById("start-quiz");
var questionText = document.getElementById("questions");
var idCounter = 0;
var answerListEl = document.getElementById("answer-list");
var score = 0
var resultEl = document.getElementById("result");
var showScore = document.getElementById("score");
var quetionsEl = document.getElementById("questions");
var initialsLabelEl = document.getElementById("enter-initials");
var initialsInputEl = document.getElementById("initials");
var initialsBtnEl = document.getElementById("initials-btn")
var initialsSubmitForm = document.getElementById("submit-initials");
var retakeBtnEl = document.getElementById("retake-btn");
var clearHighScoreEl = document.getElementById("clear-highscore-btn");
var highScore = localStorage.getItem("highscore");
var qAndA_Obj = {
  question: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  correctAnswer: ""
};



function countdown() {
    
      // keeping track of the amount of time left
    var timeInterval = setInterval(function () {
      
      // checking the time and displaying the time left using textContent
      if (timeLeft > 1) {
        timerEl.textContent = "Time " + timeLeft;
        timeLeft--;
      } 
      // checking to see if 1 second it left and displaying that time using textContent
      else if (timeLeft === 1) {
        timerEl.textContent = "Time " + timeLeft;
        timeLeft--;
      } 
    // set timer to nothing and clear the interval so timer doesn't start again
      else {
        timerEl.textContent = "Time 0";
        clearInterval(timeInterval);
      }
    }, 1000);
  };

  function startQuiz() {
    countdown();

    // hide start button 
    startQuizBtnEl.style.display = "none";

    // get questions and answers object from local storage based on id
    var id = localStorage.getItem('0')

    // if id returned
    if (id === "" || id === null) {
    // create questions and answers
    qAndA_Obj.question = "Commonly used datatypes DO NOT include______";
    qAndA_Obj.answer1 = "Strings";
    qAndA_Obj.answer2 = "Booleans";
    qAndA_Obj.answer3 = "Alerts";
    qAndA_Obj.answer4 = "Numbers";
    qAndA_Obj.correctAnswer = "answer3";

    // add object to local storage
    localStorage.setItem('0', JSON.stringify(qAndA_Obj));

    // create questions and answers
    qAndA_Obj.question = "The condition in an if/else statement is enclosed in ______.";
    qAndA_Obj.answer1 = "quotes";
    qAndA_Obj.answer2 = "curly brackets";
    qAndA_Obj.answer3 = "perenthesis";
    qAndA_Obj.answer4 = "square brackets";
    qAndA_Obj.correctAnswer = "answer3";

    // add object to local storage
    localStorage.setItem('1', JSON.stringify(qAndA_Obj));

    // create questions and answers
    qAndA_Obj.question = "Arrays in JavaScript can be used to store ________.";
    qAndA_Obj.answer1 = "numbers and strings";
    qAndA_Obj.answer2 = "other arrays";
    qAndA_Obj.answer3 = "booleans";
    qAndA_Obj.answer4 = "all the above";
    qAndA_Obj.correctAnswer = "answer4";

    // add object to local storage
    localStorage.setItem('2', JSON.stringify(qAndA_Obj));

    // create questions and answers
    qAndA_Obj.question = "String values must be enclosed within ____ when being assigned to a variable.";
    qAndA_Obj.answer1 = "quotes";
    qAndA_Obj.answer2 = "curly  brackets";
    qAndA_Obj.answer3 = "perenthesis";
    qAndA_Obj.answer4 = "square brackets";
    qAndA_Obj.correctAnswer = "answer1";

    // add object to local storage
    localStorage.setItem('3', JSON.stringify(qAndA_Obj));

    // create questions and answers
    qAndA_Obj.question = "A very useful tool used during development and debugging for printing content to the debugger is.";
    qAndA_Obj.answer1 = "JavaScript";
    qAndA_Obj.answer2 = "terminal bash";
    qAndA_Obj.answer3 = "for loops";
    qAndA_Obj.answer4 = "console.log";
    qAndA_Obj.correctAnswer = "answer4";

    // add object to local storage
    localStorage.setItem('4', JSON.stringify(qAndA_Obj));

    // display questions and answers
    diplayQuestionsAndAnswers();  
  }
  else {
    diplayQuestionsAndAnswers();
  }  

  };

  function diplayQuestionsAndAnswers() {
    // console.log("test")
    // var quetionsEl = document.getElementById("questions");
    // var answerListEl = document.getElementById("answer-list");

    // check to see if the list is still populated
    // solution found at https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
    if (answerListEl.hasChildNodes) {
      // clear list      
      while (answerListEl.firstChild) {
      answerListEl.removeChild(answerListEl.firstChild);
      }
    }

    // load questions and answers based on id counter
    qAndA_Obj = JSON.parse(localStorage.getItem(idCounter));

    // display question
    quetionsEl.textContent = qAndA_Obj.question;

    //add list items to ordered list
    var listItemEl = document.createElement("li");
    listItemEl.className = "list-item";
    listItemEl.textContent = qAndA_Obj.answer1;
    listItemEl.setAttribute("id", "answer1");
    answerListEl.appendChild(listItemEl);

    var listItemEl = document.createElement("li");
    listItemEl.className = "list-item";
    listItemEl.textContent = qAndA_Obj.answer2;
    listItemEl.setAttribute("id", "answer2");
    answerListEl.appendChild(listItemEl);

    var listItemEl = document.createElement("li");
    listItemEl.className = "list-item";
    listItemEl.textContent = qAndA_Obj.answer3;
    listItemEl.setAttribute("id", "answer3");
    answerListEl.appendChild(listItemEl);

    var listItemEl = document.createElement("li");
    listItemEl.className = "list-item";
    listItemEl.textContent = qAndA_Obj.answer4;
    listItemEl.setAttribute("id", "answer4");
    answerListEl.appendChild(listItemEl);
  };

  function answerChosen(event) {
    // var answer = qAndA_Obj.correctAnswer;
    
    if (event.target.id === qAndA_Obj.correctAnswer) {
      console.log("Correct!");

      // show answer result
      resultEl.textContent = "Correct!"
      resultEl.style.display = "block";
      score = score + 11;

      // check to see if counter is less than or equal to four and timer greater than zero
      if (timeLeft > 0 && idCounter <= 3) {
      idCounter++;
      diplayQuestionsAndAnswers();
    }
    else {
      // check to see if the list is still populated
    if (answerListEl.hasChildNodes) {
      // clear list      
      while (answerListEl.firstChild) {
      answerListEl.removeChild(answerListEl.firstChild);
      }
    }

    quetionsEl.textContent = "All Done!";
    showScore.textContent = "Your score is " + score;
    initialsLabelEl.style.display = "block";
    initialsInputEl.style.display = "block";
    initialsBtnEl.style.display = "block";
      // call recordScore function
      //recordScore(score);
      }
    }
    else {
      console.log("Wrong!")

      // show answer result
      resultEl.textContent = "Wrong!"
      resultEl.style.display = "block";

      // decriment time
      timeLeft = timeLeft - 10;

      // check to see if counter is less than or equal to four and timer greater than zero
      if (timeLeft > 0 && idCounter <= 3) {
        idCounter++;
        diplayQuestionsAndAnswers();
      }
      else {
        // check to see if the list is still populated
      if (answerListEl.hasChildNodes) {
      // clear list      
      while (answerListEl.firstChild) {
      answerListEl.removeChild(answerListEl.firstChild);
      }
    }
    quetionsEl.textContent = "All Done!"
    showScore.textContent = "Your score is " + score;
    initialsLabelEl.style.display = "block";
    initialsInputEl.style.display = "block";
    initialsBtnEl.style.display = "block";
        // call recordScore function
        //recordScore(score);
        }
    }

    console.log(event.target.id)
  }

  function recordScore(event) {
    event.preventDefault();
    
    var scoreObj = {
      initials: "",
      scoreAchieved: 0
    };

    // check to see if the list is still populated
    if (answerListEl.hasChildNodes) {
      // clear list      
      while (answerListEl.firstChild) {
      answerListEl.removeChild(answerListEl.firstChild);
      }
    }
    // hide result display
    resultEl.style.display = "none";

    // capture initials from form
    scoreObj.initials = document.getElementById("initials").value;
    scoreObj.scoreAchieved = score;

    // store object in local storage
    localStorage.setItem("scores", JSON.stringify(scoreObj));

    // check for high score
    if (highScore !== null || highScore !== "") {
      if (score >= highScore) {
        localStorage.setItem("highscore", score);
      }
    }
    else {
      localStorage.setItem("highscore", score);
    }

    console.log(scoreObj);

    showHighScore();

  };

  function showHighScore() {
    // hide initials form and show high score
    quetionsEl.textContent = ""
    showScore.textContent = "High Score: " + highScore;
    initialsLabelEl.style.display = "none";
    initialsInputEl.style.display = "none";
    initialsBtnEl.style.display = "none";

    // show retake and clear high score buttons
    retakeBtnEl.style.display = "block";
    clearHighScoreEl.style.display= "block";

  };

  function reloadApplication() {
    location.reload();
  };

  function clearHighScore() {
    console.log("Clearing high score");
    localStorage.removeItem("highscore");
  };

  document.addEventListener("DOMContentLoaded", function(event) {
    // turn off default form behavior
    event.preventDefault;

    // hide result display on load
    resultEl.style.display = "none";

    // hide form label, input and buttons
    initialsLabelEl.style.display = "none";
    initialsInputEl.style.display = "none";
    initialsBtnEl.style.display = "none";
    retakeBtnEl.style.display = "none";
    clearHighScoreEl.style.display = "none";

  });  
  startQuizBtnEl.addEventListener("click", startQuiz);
  answerListEl.addEventListener("click", answerChosen);
  initialsBtnEl.addEventListener("click", recordScore);
  initialsSubmitForm.addEventListener("submit", recordScore);
  retakeBtnEl.addEventListener("click", reloadApplication);
  clearHighScoreEl.addEventListener("click", clearHighScore);
  