// let paragraph = document.getElementById("holiday");

// let secondsleft = 10;

// function updateCountdown() {
//     if (secondsleft >= 0) {
//         paragraph.textContent = `happy independence day ${secondsleft} `;
//         secondsleft--;

//         // Schedule the next update in 1 second
//         setTimeout(updateCountdown, 1000);
//     } else {
//         DownloadButton.removeAttribute("disabled");
//     }
// }

// // Start the countdown
// updateCountdown();



// const a = true
// const b = false

// const result1 = a && b
// const result2 = b && a

// console.log(result1)



// function createCounter(n) {
//     return function () {
//         return n++;
//     };
// }

// // Example usage:
// const timmer = createCounter(5);

// const result = ["call", "call", "call"].map(() => timmer());
// console.log(result);  // Output: [10, 11, 12]


// const array = [1, 2, 3, 4, 5, 6]
// const even = array.filter(array => array % 2 === 0)
// console.log(even)


// let numbers = [1, 2, 3, 4, 5];

// let foundNumber = numbers.find(number => number % 2 === 0);

// console.log(foundNumber);

// const isArray = [1, [3, 4], [2, 5]]
// const flatArray = isArray.flat()
// console.log(flatArray)


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index) => {
//     console.log(`${index}: ${number}`);
// });



// const project = [
//     { name: 'bitlocker', status: 'in progress', deadline: '24.02.2024', team: 'praveen, naveen' },
//     { name: 'PAV activity', status: 'in progess', deadline: '25.02.2024', team: 'ramaswamy, dharsan' },
//     {name: 'query handlimg', status: 'completed', deadline:'22.02.24', team:'shankar, gopal'}
// ]

// project.forEach(project => {
//     console.log(`project ${project.name}`)
//     console.log(`status ${project.status}`)
//     console.log(`deadline ${project.deadline}`)
//     console.log(`team ${project.team}`)
//     console.log('-----------------------------')
// })

/*
----------------------------------------------------------------------------------------------------------------------------------
*/

// function groupBy(array, key) {
//     return array.reduce((result, currentItem) => {
//         const keyValue = currentItem[key];

//         // Create a new array for the key if it doesn't exist
//         if (!result[keyValue]) {
//             result[keyValue] = [];
//         }

//         // Push the current item to the array associated with the key
//         result[keyValue].push(currentItem);

//         return result;
//     }, {});
// }

// // Example usage
// let data = [
//     { name: 'Alice', department: 'HR' },
//     { name: 'Bob', department: 'IT' },
//     { name: 'Charlie', department: 'HR' },
//     { name: 'David', department: 'IT' }
// ];

// let groupedData = groupBy(data, 'department');

// console.log(groupedData);


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let squre = numbers.map((number) => {
//     return number * number
// })
// console.log(squre)

// const fruit = ['apple', 'orange', 'banaba']
// const str = fruit.toString()
// console.log(str)


// let i
// for (i = 10; i >= 1; i--){
// console.log(i)
// }
// console.log(i)


// i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }

while (true) {
    let num = Number(prompt('not a number'))
    if (!isNaN(num)) 
        break;
    
}