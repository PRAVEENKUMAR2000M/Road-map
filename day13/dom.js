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







// // Create a new anchor element
// let anchor = document.createElement("a");

// // Set its 'href' attribute to 'https://www.google.com'
// anchor.href = "https://www.google.com/";

// // Set its 'target' attribute to '_blank'
// anchor.textContent = 'chick here'

// anchor.target = "_blank";

// // Create a new paragraph element
// let paragraph = document.createElement("p");

// // Append the anchor element to the paragraph element
// paragraph.appendChild(anchor);

// // Append the paragraph element to the document body or any other desired location
// document.body.appendChild(paragraph);



// let anchor = document.createElement("a");
// paragraph.append(anchor);
// document.body.appendChild(paragraph);anchor.href = "https://www.google.com/"
// anchor.textContent = "click here";
// anchor.target = "_blank";
// let paragraph = document.createElement("p");


// let list = document.createElement("ul");

// let listItem1 = document.createElement("li");
// listItem1.textContent = "item 1";
// list.appendChild(listItem1);

// let listItem2 = document.createElement("li");
// listItem2.textContent = "item 2";
// list.appendChild(listItem2);

// document.body.append(list);





// let list = document.createElement("ul");
// let listItem1 = document.createElement("li");
// listItem1.textContent = "item 1";
// list.appendChild(listItem1);
// document.body.append(listItem1);

// let listItem2 = document.createElement("li");
// listItem2.textContent = "item 2";
// list.appendChild(listItem2);
// document.body.append(listItem2);


// let listItem3 = document.createElement("li")
// listItem3.textContent = "item3"
// list.appendChild(listItem3);
// document.body.append(list);




// let highlightsElements = document.getElementsByClassName("highlights");
// for (let index = 0; index < highlightsElements.length; index++){
//     highlightsElements[index].style.backgroundColor = 'blue'
// }

// let listitem = ["Tea", "coffee", "blackcoffee", "greenTea"];
// let list = document.createElement("ol");
// listitem.forEach(data => {
//     let listitem = document.createElement("li");
//     listitem.textContent = data;
//     list.appendChild(listitem);
// })
// document.getElementById("listContainer").appendChild(list);

// let menucard = ["tea", "coffee", "juice", "cake"];
// let list = document.createElement("ol");
// menucard.forEach(data => {
//     let menucard = document.createElement("li");
//     menucard.textContent = data;
//     list.appendChild(menucard);
// })
// document.getElementById("listContainer").appendChild(list);



// let paragraph = document.querySelectorAll(".highlights");
// console.log(paragraph);

document.getElementById("container").innerHTML = "<b>hi this is pravyn marley </b>"