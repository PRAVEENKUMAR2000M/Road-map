// while (true) {
//     let num = Number(prompt('enter a number'))
//     if (!isNaN(num))
//         break
// }



// console.log('demo')
// for (i = 1; i <= 10; i++){
//     if (i % 3 === 0)
//         continue
//         console.log(i)

// }


// let arr = ['APPLE', 'ORANGE', 'BANANA', 'MANGO']

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i].toLocaleLowerCase())
// }


// let pwd_correct = false
// if (pwd_correct) {
//     console.log('password correct')
// } else {
//     console.log('passwor wrong')
// }


// const age = 24
// const gender = 'male'
// if (age > 20 && gender === 'male') {
//     console.log('you are welcome')
// } else {
//     console.log('your are not eligible')
// }

// const a = 30, b = 40

// max = a>b ? a : b
// console.log(max)


// const obj1 = { name: "praveen", age: 24 }
// const obj2 = obj1

// obj1.age = 25

// console.log('obj1', obj1)
// console.log('obj2', obj2)

/*
-------------------------------------------------------------------------------------------------------
*/

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     insertAtTail(data) {
//         let newNode = new Node(data);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let tail = this.head;
//             while (tail.next !== null) {
//                 tail = tail.next;
//             }
//             tail.next = newNode;
//         }
//     }
//     toArray() {
//         let node = []

//         let thead = this.head

//         while (thead != null) {
//             node.push(thead.data)
//             thead = thead.next
//         }
//         return node
//     }

//     insertAtHead(data) {
//         let newNode = new Node(data)
//         newNode.next = this.head
//         this.head = newNode
//     }

//     length() {
//         //     let node = []

//         //     let thead = this.head

//         //     while (thead != null) {
//         //         node.push(thead.data)
//         //         thead = thead.next
//         //     }
//         //     return node.length
//         // }
//         let node = 0

//         let thead = this.head

//         while (thead != null) {
//             node++
//             thead = thead.next
//         }
//         return node
//     }

//     deleteAtHead() {
//         if (this.head != null) {
//             this.head = this.head.next
//         }

//     }

//     deleteAtTail() {
//         if (this.head != null) {
//             if (this.head.next === null) {
//                 this.head = null
//             } else {
//                 let thead = this.head
//                 while (thead.next.next != null) {
//                     thead = thead.next
//                 }
//                 thead.next = null
//             }
//         }
//     }
// }

// let list = new LinkedList();
// list.insertAtTail(5);
// list.insertAtTail(7)
// list.insertAtHead(2)
// list.insertAtHead(15)
// list.insertAtHead(9)
// list.insertAtHead(8)
// list.insertAtHead(6)
// list.deleteAtTail()
// // list.deleteAtHead()
// console.log(list.toArray())
// console.log(list.length())

/*
-----------------------------------------------------------------------------------------------------------------------------------------
*/


// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then((res) => res.json())
//     .then((msg) => {
//         msg.forEach((str) => {
//             console.log(str.email)
//         })
//     })





