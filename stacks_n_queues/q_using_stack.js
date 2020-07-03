// const Stack = require('./stacks').Stack;
class Queue{
    constructor(){
        this.start =[];
        this.end = [];
    }

    enQueue(value){
        this.start.push(value);
        if(this.end.length === 0 ) {
            this.end.push(value);
        }else {
            this.end=[];
            for(let i=this.start.length-1;i>=0;i--){
                this.end.push(this.start[i]);
            }
        }
        return this;
    }

    deQueue(){
        if(this.end.length === 0) return 'Empty Queue';
        const value = this.end.pop();
        this.start=[];
        for(let i=this.end.length-1;i>=0;i--){
            this.start.push(this.end[i]);
        }
        return value;

    }
}
const myQ = new Queue();
myQ.enQueue(1);
myQ.enQueue(2);
myQ.enQueue(3);
console.log(myQ);
myQ.deQueue();
console.log(myQ);
//start 1 2 3
//end  3 2 1