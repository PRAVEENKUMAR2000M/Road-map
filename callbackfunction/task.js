
const countdownElement = document.getElementById('countdown');

function startCountdown() {
    countdown(10);
}

function countdown(num) {
    displayCountdown(num, function () {
        if (num > 1) {
            countdown(num - 1);
        } else {
            displayMessage("Happy Independence Day");
        }
    });
}

function displayCountdown(num, callback) {
    countdownElement.textContent = num;
    setTimeout(function () {
        countdownElement.textContent = "";
        callback();
    }, 1000);
}

function displayMessage(message) {
    countdownElement.textContent = message;
}

startCountdown();
