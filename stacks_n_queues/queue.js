class Node {
    constructor(value,next=null){
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0;
    }

    enQueue(value){
        const _node = new Node(value);
        if(!this.start){
            this.start = _node;
            this.end = _node;
        } else {
            this.end.next = _node;
            this.end = _node;
        }
        this.length++;
        return this;
    }

    deQueue(){
        let value;
        if(!this.start) return 'Empty Queue';
        if(this.length === 1){
            value = this.end.value;
            this.start =null;
            this.end = null;
        } else {
            this.start = this.start.next;
        }
        this.length--;
        return value;
    }

    print(){
        let node  = this.start;
        if(!node) console.log('Empty Queue');
        while(node){
            console.log(node.value);
            node = node.next;
        }

        
    }

    peek(){
        if(!this.start) return 'Empty queue';
        return this.start.value;
    }
    
}

const myQueue = new Queue();
myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.enQueue(3);
console.log(myQueue);
myQueue.deQueue();
myQueue.deQueue();
myQueue.deQueue();
console.log(myQueue);