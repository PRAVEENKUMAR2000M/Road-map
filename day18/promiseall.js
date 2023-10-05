// function asycnFunction() {
//     return new Promise(resolve => {
//         setTimeout(()=>resolve("praveenmech483@gmail.com"))
//     })
// }

// function asycnFunction2() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("indumathi2603@gmail.com"));
//     })
// }

// function asycnFunction3() {
//     return new Promise(resolve => {
//         setTimeout(()=> resolve("motoboss007@gmail.com"))
//     })
// }

// Promise.all([asycnFunction(), asycnFunction2(), asycnFunction3()])
//     .then(result => {
//         console.log("all promise execute", result)
//     })
//     .catch(error => {
//     console.log("error fetching the data", error)
// })




// const urls = [
//     `https://jsonplaceholder.typicode.com/users`,
//     `https://jsonplaceholder.typicode.com/posts/`,
//     `https://jsonplaceholder.typicode.com/posts/comments`,
// ]

// const fetchPromise = urls.map(url => fetch(url));
// Promise.all(fetchPromise)
//     .then(response => Promise.all(response.map(response => response.json())))
//     .then(dataArray => {
//         console.log(dataArray)
//     })
//     .catch(error => {
//     console.log("data not fetching",error)
// })



var urls = [
    `https://jsonplaceholder.typicode.com/users`,
    `https://jsonplaceholder.typicode.com/posts`,
    `https://jsonplaceholder.typicode.com/comments`,
]
 
var fetchPromise = urls.map(url => fetch(url))
Promise.all(fetchPromise)
    .then(response => Promise.all(response.map(response => response.json())))
    .then(value=> {
    console.log(value)
})