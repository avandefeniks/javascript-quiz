var timerEl = document.getElementById("timer");
var timeLeft = 2;
var startQuizBtnEl = document.getElementById("start-quiz");
var questionText = document.getElementById("questions");
var idCounter = 0;
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
        timerEl.textContent = timeLeft + " second remaining";
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
    qAndA_Obj.question = "string values must be enclosed within ____ when being assigned to a variable.";
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
    console.log("test")
  }

  document.addEventListener("DOMContentLoaded", function() {

    var resultEl = document.getElementById("result");
    resultEl.style.display = "none";

  });
  startQuizBtnEl.addEventListener("click", startQuiz)