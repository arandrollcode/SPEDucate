window.onload = function() {
    // Timer countdown function
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    // Set the timer duration (5 minutes = 300 seconds)
    var duration = 300;
    var display = document.querySelector('#timer');
    startTimer(duration, display);
};


//Gamification Begins here
//--------------------------------------------------------------------------------------------

// Function to increment the score by 100 and trigger confetti animation
function increaseScoreAndConfetti() {
    let scoreElement = document.getElementById('score');
    let currentScore = parseInt(scoreElement.textContent);
    let finalScore = currentScore + 100;
    
    // Function to increment score with animation
    function incrementScore(targetElement, finalScore) {
        let incrementInterval = setInterval(() => {
            currentScore += 10; // Increase score by 10 for smoother animation
            targetElement.textContent = currentScore;
            if (currentScore >= finalScore) {
                clearInterval(incrementInterval);
                triggerConfetti();
            }
        }, 50); // Interval for animation
    }

    // Function to trigger confetti animation
    function triggerConfetti() {
        // Your code to trigger confetti animation goes here
        alert('Good Job! You\'ve earned 100 points!');
    }

    incrementScore(scoreElement, finalScore);
}

// Call increaseScoreAndConfetti function when the page loads
window.onload = increaseScoreAndConfetti;


    // Initialize the array with 0
    let scoreArray = [0];

    // Function to update the score and array value
    function updateScore(newScore) {
        // Update the array with the new score
        scoreArray[0] = newScore + scoreArray[0];

        // Get the score element by ID
        let scoreElement = document.getElementById('score');

        // Update the score displayed in the HTML
        scoreElement.textContent = scoreArray[0];
    }

    // Example usage of the updateScore function
    // Call this function whenever you need to update the score
    updateScore(100); // Example: update the score to 100

    //claim badge

    //Function to show alert of completion
    function claimBadge() {
        alert("Congratulations! You have completed this lesson!");
    }