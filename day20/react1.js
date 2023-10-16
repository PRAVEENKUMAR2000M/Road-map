// let x = 10;

// if (true) {
//     x = 20;
// }

// console.log(x);


// let x = 10;

// function scope(){
    
//     x = 50;
// }
// scope();
// console.log(x);



// const arrays = [1, 2, 3, 4, 5];
// arrays[2] = 12;
// console.log(arrays);


//  let func=()=> {
//     console.log("hello");
// }
// func();


// function func() {
//     console.log("hello")
// }
// func();



// non anonymous function
// function sayHello() {
//     console.log("hello world");
// }
// sayHello();

//anonymous function

// let sayHello = function () {
//     console.log("hello world");
// }
// sayHello();



//arrow funtion
// let sayHello = () => {
//     console.log("hello world");
// }
// sayHello();



// IIFE: immediateley invoked function expression

// (() => {
//     console.log("hello world");
// })();


// classes
// class Student{
//     constructor(name = "guest", age) {
//         this.name = name
//         this.age = age;
//      }
// }
 
// let Student101 = new Student("praveen", 26)
// let Student102 = new Student("kumar", 25)
// let Student103 = new Student()

// console.log(Student101);
// console.log(Student102);
// console.log(Student103);



// class Student{
//     sayHello() {
//         console.log("hello mentors");
//     }
// }

// class mentor{
//     sayHello() {
//         console.log("hello students")
//     }
// }


// module.exports = {
//     Student, mentor
// }


//template litera

// let name = "praveen"
// let age = 24;
// let message = `hello iam ${name} and iam ${age} years old`
// console.log(message);




//spread operator

// let numbers = [1, 2, 3, 4];
// let moreNumbers = [...numbers, 5, 6, 7];
// console.log(moreNumbers);


// let array1 = [1, 2, 3];
// let arrat2 = [4, 5, 6];
// combainedArray = [...array1, ...arrat2];
// console.log(combainedArray);




// let object1 = {
//     x: 10,
//     y:20
// }
// // console.log({...object1})

// let object2 = {
//    z:30
// };

// console.log({ ...object1, ...object2 });




// // rest operator
// function display(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// display(5, 7, 8, 9, 10);






//destructuring method

// simple interest

// let SI = [1000, 2, 5];
// let [principleofamount, numbersofyears, rateofinterest] = SI
// console.log(principleofamount, numbersofyears, rateofinterest);

// console.log(formula);



// let SI = [1000, 2, 5];
// let principleAmount = SI[0];
// let numbersOfyears = SI[1];
// let rateOfinterest = SI[2];
// console.log(principleAmount, numbersOfyears, rateOfinterest);




// let numbers = [1, 2, 3, 4, 5];
// // let [, , , c, d, e] = numbers;
// let [d,e]=numbers.slice(3,)
// console.log( d, e);



// let a = 6;
// let b = 5;
// console.log(`before swaping b = ${ a }, a = ${ b }`);



// var num = "12 13 14 15".split(" ").map(Number);
// console.log(num);



// let num = '1 2 3 4 5 6 7 8 9 ';
// for (let i = 0; i <num.length; i++){
//     if (num[i] % 2 != 0) {
//         console.log(num[i]);
//     }
// }



// let num = "1 2 3 4 5 6 7 8 9".split(" ");
// for (let i = 0; i < num.length; i++){
//     if (num[i]%2==0) {
//         console.log(num[i]);
//     }
// }
















































