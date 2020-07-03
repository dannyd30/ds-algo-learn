//Last In First Out LIFO
//Stacks can be implemented using both Link list and array. Since array is easier, i have used Link list
//4321
// import { LinkedList } from '../linked-list/linked-list';
// const LinkedList = require('../linked-list/linked-list').LinkedList;
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        // this.stack = new LinkedList(value);
        this.top = null;
        this.bottom = null;
        this.length = 0;
        // console.log(LinkedList.LinkedList);        
    }

    push(value){
        const newNode = new Node(value);
        if(!this.bottom){
            this.bottom = newNode;
            this.top = newNode;
        }else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return 'Nothing to remove';
        const lastVal = this.top.value;
        if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        return lastVal;
    }

    print(){
        let node = this.top;
        if(!node) console.log('Empty Stack');
        while(node){
            console.log(node.value);
            node = node.next;
        }
    }

    peek(){
        return this.top.value;
    }
}
module.exports= {
    Stack
}
const myStack = new Stack(1);
myStack.push(2);
// myStack.print();
myStack.pop();
// myStack.print();
myStack.push(2);
myStack.push(33);
myStack.push(32);
// myStack.print();
// console.log(myStack.peek());
// myStack.pop();
// myStack.pop();

myStack.print();
myStack.push(11);
myStack.print();
console.log(myStack);

//Stack using Array
class ArrayStack {
    constructor(){
        this.data =[];
    }

    push(value){
        return this.data.push(value);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length-1];
    }
}

const arrayStack = new ArrayStack();
arrayStack.push(1);
arrayStack.push(2);
console.log(arrayStack)
console.log(arrayStack.peek())