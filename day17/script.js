// let trust = new Promise((resolve, reject)=> {
    



//     //pass the argument
//     let result = 20;
//     if (result > 10) {
//         resolve(result);
//     } else {
//         reject("result is not greater then 10")
//     }
// })
// trust.then(
//     (result)=> console.log("result:",result),
//     (message)=>console.log("Erroe",message),
// )



let trust = new Promise((resolve, reject) => {
    let result = 20;
    if (result > 10) {
        resolve("yes 10 is greater then 20");
    } else {
        reject("result is not grater then 10")
    }
})
trust.then(
    // (result) => console.log("result:", result),
    // (message)=>console.log("Error",message),

    (result) => {
        console.log("result:", result);
    }

)