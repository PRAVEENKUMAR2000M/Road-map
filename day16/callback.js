// const makeBurger = () => {
//   const beef = getBeef();
//   const patty = cookBeef(beef);
//   const buns = getBuns();
//   const burger = putBeefBetweenBuns(buns, beef);
//   return burger;
// };

// const burger = makeBurger();
// serve(burger);


// callback function
// let numbers = [1, 2, 3, 4, 5];
// function printItems(value, index, Array) {
//   console.log(value);
// }
// numbers.forEach(printItems);


// let array = new Array(1, 2, 3, 4, 5);
// array.forEach((Array) => console.log(Array));

// let numbers = new Array();

// numbers.push(2);
// numbers.push(3);
// numbers.push(4);
// // numbers.forEach((value, index, array) => {
// //   console.log(value, index, array);
// // })
// function printItems(value, index, Array) {
//   console.log(value, index, Array);
// }
// numbers.forEach(printItems);





// let button = document.getElementById('button');

// function anotherFunction() {
//   console.log('anther function called');
// }
// function handleClick(anotherFunction) {
//   console.log("function");
//   anotherFunction();
// }
// button.addEventListener('click', function () {
//   handleClick(anotherFunction);
// })





// function function1(callback) {
//   setTimeout(function () {
//     console.log("function 1 completed");
//     callback();
//   }, 1000)
// }

// function function2(callback) {
//   setTimeout(function () {
//     console.log("function 2 completed");
//     callback();
//   }, 2000);
// }
// function function3(callback) {
//   setTimeout(function () {
//     console.log("function 3 completed");
//   }, 3000);
// }

// function1(function () {
//   console.log("function inside function1");
//   function2(function () {
//     console.log("function inside function2");
//     function3(function () {
//       console.log("function in side function3")
//     });
//   });
// });



// function function1(callback) {
//   setTimeout(function () {
//     console.log('your document has been under process');
//     callback();
//   }, 1000);
// }

// function function2(callback) {
//   setTimeout(function () {
//     console.log("your document has been under process");
//     callback();
//   }, 2000);
// }

// function function3(callback) {
//   setTimeout(function () {
//     console.log("your document has been under process");
//     callback();
//   }, 3000);
// }


// function1(function () {
//   console.log("process has been completed")
//   function2(function () {
//     console.log("process has been completed");
//     function3(function () {
//       console.log("process has been completed");
//       console.log("all function completed");
//     });
//   });
// });




// function delayedGreeting(praveen) {
//   setTimeout(function () {
//     console.log("hello");
//     praveen();
//   },2000);
// };

// delayedGreeting(function () {
//   console.log("world");
// });


// function delayedGreeting(name, callback) {
//   setTimeout(function () {
//     callback(`hi ${name}`);
//   },2000);
// }
// delayedGreeting("praveen", (message) => {
//   console.log(message);
// });


// function delayedGreeting(name, callback) {
//   setTimeout(function () {
//     callback(`hello ${name}`);
//   },5000);
// }
// delayedGreeting("praveen", (message) => {
//   console.log(message);
// })







