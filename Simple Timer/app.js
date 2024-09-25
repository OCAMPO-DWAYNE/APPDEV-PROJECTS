// App.js

let countdownInterval;
let timeLeft = 30; // Countdown starts from 30 seconds

const value = document.querySelector('#value');
const startButton = document.getElementById('start');
const resetButton = document.querySelector('.reset');

// Format and update the timer display
const updateDisplay = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    value.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

// Start the countdown
const startCountdown = () => {
    // Clear any existing interval
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            return;
        }
        timeLeft--;
        updateDisplay();
    }, 1000); // Update every second
};

// Reset the countdown
const resetCountdown = () => {
    clearInterval(countdownInterval);
    timeLeft = 30; // Reset to 30 seconds
    updateDisplay();
};

// Add event listeners to buttons
startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click', resetCountdown);

// Initialize display
updateDisplay();
