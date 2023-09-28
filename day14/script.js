// function sayHello() {
//     console.log("hello venki");
// }
// window.setTimeout(sayHello, 5000);


//call back function.

// window.setTimeout(() => {
//     console.log("hello marley");
// },3000

// )

// window.setTimeout(
//     () => {
//         document.body.style.backgroundColor = 'blue'
//     },3000
// )


// window.setTimeout(
//     () => {
//         document.body.style.backgroundColor = 'green'
//     },5000
// )


// let DownloadButton = document.getElementById("download");

// window.setTimeout(
//     () => {
//         DownloadButton.removeAttribute("disabled");
//     },5000
// )

// let DownloedButton = document.getElementById("download");

// window.setTimeout(
//     () => {
//         DownloedButton.removeAttribute("disabled");
//     },5000
// )

// let secondsleft = 100;
// let updatecountDown = () => {
//     if (secondsleft >= 0) {
//         console.log(secondsleft--);
//     } else {
//         clearInterval(countDownintervel)
//     }
    
// }
// let countDownintervel = setInterval(updatecountDown, 1000);


// let timesleft = 10;
// let latestcountDown = () => {
//     if (timesleft >= 0) {
//         console.log(timesleft--);
//     } else {
//         clearInterval(timeDownInterval)
//     }
// }
// let timeDownInterval = setInterval(latestcountDown, 1000);






// let timesleft = 20;
// let latestcountDown = () => {
//     if (timesleft > 0) {
//         console.log(timesleft--)
//     } else {
//         clearInterval(timeDowninterval);
//     }
// }
// let timeDowninterval = setInterval(latestcountDown, 1000);









// let paragraph = document.getElementById("countdown");
// let DownloadButton = document.getElementById("download");

// let paragraph = document.getElementById("countdown");
// let DownloadButton = document.getElementById("download");

// let secondsleft = 10;
// let updatecountDown = () => {
//     if (secondsleft >= 0) {
//         paragraph.textContent = `your download will appear within ${secondsleft} seconds`;
//         secondsleft--;
//     } else {
        // clearInterval(countDownInterval);
//         DownloadButton.removeAttribute("disabled");
//     }
// }

// let countDownInterval = setInterval(updatecountDown, 1000);


// let name = window.prompt("enter your name");
// console.log(`hi ${name}`);





// const userControl = confirm(`are you sure you want to delete this file`);
// if (userControl) {
//         console.log("item deleted");
// } else {
//         console.log("action canceled");
// }



// let button = document.getElementById("work");
// button.addEventListener("click", function () {
//         console.log("bottun clicked")
// })


// let button = document.getElementById("work");
// button.addEventListener("click", function () {
//         console.log("button clicked");
// })





const divElement = document.getElementById("mouse");
divElement.addEventListener("mouseover", function () {
        divElement.style.backgroundColor = "green"
})
divElement.addEventListener("mouseout", function () {
        divElement.style.backgroundColor = "blue"
})