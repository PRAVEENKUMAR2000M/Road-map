// var isGreater = function(totalCandies, candies, i){
//     let assumption = ture;
//     for(let index=0; index<candies.length; index++){
//         if(index !=i){
//             if(totalCandies<candies[i]){
//                 assumption = fales;
//             }
//         }
//     }
// }

// let result = [];
// for(let i=0; i<candies.length;i++){
//     let totalCandies = candies[i]+extraCamdies;
//     if(isGreater(totalCandies, candies,i)){
//         result.push(ture);
//     }else{
//         result.push(fales);
//     }
//     return result;
//  }

// console.log('N =', 10, 'executions', Math.log2(10));
// console.log('N =', 20, 'executions', Math.log2(20));
// console.log('N =', 30, 'executions', Math.log2(30));
// console.log('N =', 40, 'executions', Math.log2(40));
// console.log('N =', 50, 'executions', Math.log2(50));

// linked list implimentation

// class Node {
//     constructor(data){
//         this.data = data
//         this.address = null
//     }
// }

// let node1 = new Node(5);
// let node2 = new Node(6);
// node1.next = node2;
// node2.next = new Node(7);
// console.log(node1.next.next.data);


// class Node {
//     constructor(data){
//         this.data = data
//         this.address = null
//     }
// }

// let node1 = new Node(5);
// let node2 = new Node(7);
// node1.next = node2

// console.log(node1);


// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// class linkeslist{
//     constructor(){
//         this.head = null
//     }


// insertAtTail(data){
//     let newNode = new Node(data)
//     if(this.head == null){
//         this.head = newNode
//     }else{
//         let tail = this.head
//         while(tail.next !==null){
//             tail = tail.next
//         }
//         tail.next = newmode
// toArray(){
    
//     let node = [];
//     let thead = next.head
//     while(thead != null){
//         node.push(thead.data)
//         thead = theadnext;


//     }
//         return node
//         }
//     }
//   }
// }

// let list = new linkeslist();
// list.insertAtTail(3);
// console.log(list.toArray());

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// function findMiddle(head) {
//     let slow = head;
//     let fast = head;

//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return slow;
// }

// // Helper function to create a linked list from an array
// function createLinkedList(arr) {
//     let dummy = new ListNode(-1);
//     let current = dummy;

//     for (const val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }

//     return dummy.next;
// }

// // Helper function to convert a linked list to an array
// function linkedListToArray(head) {
//     const result = [];
//     let current = head;

//     while (current) {
//         result.push(current.val);
//         current = current.next;
//     }

//     return result;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const head1 = createLinkedList(arr1);
// const middleNode1 = findMiddle(head1);
// const resultArray1 = linkedListToArray(middleNode1);
// console.log(resultArray1); // Output: [3, 4, 5]

// const arr2 = [1, 2, 3, 4, 5, 6];
// const head2 = createLinkedList(arr2);
// const middleNode2 = findMiddle(head2);
// const resultArray2 = linkedListToArray(middleNode2);
// console.log(resultArray2); // Output: [4, 5, 6]


// stack


class Stack{
    constructor(){
        this.iteam = [];
        this.top = -1;
    }
    push(data){
        this.iteam.push(data);
        this.top++;
    }
    pop(){
        this.iteam.pop();
        this.top--;
    }
    peek(){
        return this.iteam[this.top];

    }
    isEmpty(){
        return this.top == -1;
    }
}

let stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());


