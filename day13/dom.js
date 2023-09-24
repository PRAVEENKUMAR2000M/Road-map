// //create a paragraph html element
// let paragraph = document.createElement("p");

// //set the content of the paragraph element
// paragraph.textContent = "this is a dynamicall element"

// //append of the paragraph element to the body
// document.body.appendChild(paragraph);


// let header = document.createElement("h1");
// header.textContent = "this is a dynamical element"


// let paragraph = document.createElement("p");
// paragraph.textContent = "this is a dynamical element"
// // document.getElementById("firstDiv").append(header, paragraph)

// let firstDiv = document.createElement("div");
// firstDiv.append(header, paragraph);
// document.body.appendChild(firstDiv);


// // create an anchor element
// let link = document.createElement("a");
// link.href = "https://www.google.com/"
// link.textContent = "visit gooogle.com"
// document.getElementById("secondDiv").appendChild(link);






// // to create a image element
// let googlelogo = document.createElement("img");
// // googlelogo.src = "./png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"
// googlelogo.setAttribute("src", "./png-transparent-google-logo-google-search-google-play-google-text-logo-number.png")
// googlelogo.setAttribute("alt", "googlelogo");
// // googlelogo.width = 200
// googlelogo.style.width = '200px'

// document.getElementById("secondDiv").appendChild(googlelogo);






//01) exercise
// let paragraph = document.createElement("p");
// paragraph.textContent = "Hello DOM"
// document.getElementById("secondDiv").appendChild(paragraph);



// //02) exercise
// let header = document.createElement("h1");
// header.textContent = "welcome to our website"

// let thirdDiv = document.createElement("div")
// thirdDiv.append(header);

// document.body.append(thirdDiv);




// //03)exercise
// let thalaAjith = document.createElement("img");
// thalaAjith.src = "./thalaAjith.jpeg"
// // let imgContainer = document.createElement("div");
// // imaContainer.append(thalaAjith);
// thalaAjith.width = 300
// document.getElementById("imgContainer").appendChild(thalaAjith);




// //04)exercise
// let anchortag = document.createElement('a');
// anchortag.href = './png-transparent-google-logo-google-search-google-play-google-text-logo-number.png'
// paragraph.textContent = 'click here'
// paragraph.target(_blank);

// document.getElementById("paragrapg").appendChild(anchortag);




// Create a new anchor element
let anchor = document.createElement("a");

// Set its 'href' attribute to 'https://www.google.com'
anchor.href = "https://www.google.com/";

// Set its 'target' attribute to '_blank'
anchor.target = "_blank";

// Create a new paragraph element
let paragraph = document.createElement("p");

// Append the anchor element to the paragraph element
paragraph.appendChild(anchor);

// Append the paragraph element to the document body or any other desired location
document.body.appendChild(paragraph);
