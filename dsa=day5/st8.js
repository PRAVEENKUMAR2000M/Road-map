// // Getting input via STDIN
// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

// inp.on("line", (data) => {
//   userInput.push(data);
// });

// class Stack {
//   constructor() {
//     this.items = [];
//     this.top = -1;
//   }
//   push(data) {
//     this.items.push(data);
//     this.top++;
//   }
//   pop() {
//     this.items.pop();
//     this.top--;
//   }
//   peek() {
//     return this.items[this.top];
//   }
//   isEmpty() {
//     return this.top === -1;
//   }
// }

// inp.on("close", () => {
//   //start-here
//   //Your code goes here … replace the below line with your code logic 

//   console.log(userInput[0]);

//   //end-here
// });


// function sayHello(){
//     console.log("hello");
//     sayHello();
// }
 
// sayHello();

// function sayHello(N){
//     for(let i=2;i<=N; i++){
//         console.log("hello");
//     }
// }

// sayHello(3);


// function sayHello(N){
//     if(N<=1) return;
//     console.log("N");
//     sayHello(N-1);
// }
// sayHello(5);


// function recursion(n){
//     if(n>=1){
//         console.log(n);
//         recursion(n-1);
//     }
// }return recursion(5);

// function recursion(n){
//     if(n>=1){
   
//         console.log(n);
//         recursion(n-1);
        
//     }
// }return recursion(5);

// function printNaturalNumbers(n) {
//     if (n >= 1) {
//       printNaturalNumbers(n - 1); // Recursive call with n-1 before printing
//       console.log(n); // Print the current value of n after the recursive call
//     }
//   }
  
//   // Test the function with input 5
//   printNaturalNumbers(5);
  

// function printNaturalNumbers(n) {
//     if (n >= 1) {
//       console.log(n);
//       printNaturalNumbers(n - 1); // Recursive call with n-1
//     }
//   }
  
//   // Test the function with input 5
//   printNaturalNumbers(5);

function print(N){
if(N==0) return;
    console.log(N);
    print(N-1);

}return print(10);


// function sayHello(N){
//     if(N==0)return
//     console.log("hello");
//     sayHello(N-1);
// } return sayHello(3);