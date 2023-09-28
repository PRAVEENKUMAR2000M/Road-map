let paragraph = document.getElementById("holiday");

let secondsleft = 10;

function updateCountdown() {
    if (secondsleft >= 0) {
        paragraph.textContent = `happy independence day ${secondsleft} `;
        secondsleft--;

        // Schedule the next update in 1 second
        setTimeout(updateCountdown, 1000);
    } else {
        DownloadButton.removeAttribute("disabled");
    }
}

// Start the countdown
updateCountdown();



