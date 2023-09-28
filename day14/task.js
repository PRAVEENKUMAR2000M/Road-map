// let countryDropdown = document.getElementById("countryDropdown");
// let stateDropdown = document.getElementById("sateDropdown");
// let districDropdown = document.getElementById("districDropdown");

// countryDropdown.addEventListener("change", function () {
//     console.log(countryDropdown.value);
// })



let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
