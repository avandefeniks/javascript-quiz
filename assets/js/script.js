var timerEl = document.getElementById('timer');

function countdown() {
    var timeLeft = 10;
  
    // keeping track of the amount of time left
    var timeInterval = setInterval(function () {
      
      // checking the time and displaying the time left using textContent
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } 
      // checking to see if 1 second it left and displaying that time using textContent
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } 
    // set timer to nothing and clear the interval so timer doesn't start again
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  };

  countdown();