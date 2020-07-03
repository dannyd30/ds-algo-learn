/**
 * Linked List 
 * Linear Data Structure
 * 
 * ex: Linked list: a --> b --> c
 * a: head;
 * c: tail;
 * 
 *ex:
 * linkedList = {
 *  head:{
 *      value: 'test',
 *      next: {
 *          value: '',
 * next:null    
 *        }
 *      }    
 * }
 */

 class Node {
    constructor(val, next=null){
        this.value = val;
        this.next = next;
        
    }
 }

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    //O(1)
    append(val){
        const _node = new Node(val);
        this.tail.next = _node;
        this.tail = _node;
        this.length++;
    }

    //O(1)
    prepend(val){
        const _node = new Node(val);
        _node.next = this.head;
        this.head = _node;
        this.length++;
    }

    /**
     * Inserts a value at the given index
     * O(n)
     * @param {*} index 
     * @param {*} value 
     */
    insert(index,value){
        if(index < 0 || index > this.length) return 'Invalid Index';
        if(index === 0 ){
            this.prepend(value)
        } else if(index === this.length){
            this.append(value);
        } else {
            const _node = new Node(value);
            let currNode = this.head.next;
            let i=1;
            let prevNode = this.head;
            while(index !== i){
                prevNode = currNode;
                currNode = currNode.next;
                i++;
            }
            _node.next =currNode;
            prevNode.next = _node;
            this.length++;
        }
    }

    /**
     * Removes a value at the given index
     * O(n)
     * @param {*} index 
     */
    removeAtIndex(index){
        if(index < 0 || index > this.length) return 'Invalid Index';
        if(index === 0 ){
            const value = this.head.value;
            this.head = this.head.next;
            return value;
        } else {
            let currNode = this.head.next;
            let i=1;
            let prevNode = this.head;
            while(index !== i){
                prevNode = currNode;
                currNode = currNode.next;
                i++;
            }
            
            prevNode.next = currNode.next;
            this.length--;
            return currNode.value;    
        }
        


    }

    /**
     * Removes a node by searching for given value
     * O(n)
     * @param {*} value 
     */
    remove(value){
        let node = this.head;
        let prev = node;
        while(node && node.value !== value){
            prev = node;
            node = node.next;
        }

        if(node){
            prev.next = node.next;
            this.length--;
        } else {
            return 'Not found';
        }
    }

    /**
     * Prints the given list values with arrows
     */
    printList(){
        let node = this.head;
        let str='';
        while(node){
            str += `${node.value}`;
            node = node.next;
            if(node) str+= ' --> '
        }
        console.log(str);
    }

    /**
     * Returns the node value at the given index
     * O(n)
     * @param {*} index 
     */
    get(index){
        if(index === 0){
            return this.head.value;
        } else if(index > this.length){
            return 'Invalid Index';
        } else {
            let i=1;
            let currNode = this.head.next;
            while(i!== index){
                currNode = currNode.next;
                i++;
            }
            return currNode.value;
        }
    }


    //1 > 2 > 3 > 4
    //1 - 2-s 3-t
    //2 > 1
    //3- s 
    reverse(){
        if(this.length === 1 || !this.head.next) return this;
        this.tail=this.head;
        let first = this.head;
        let second = this.head.next;
        while(second){
            const temp = second.next;
            second.next = first;
            first = second; 
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this;
    }
}

// const linkedList=  new LinkedList(10);
// linkedList.append(11);
// linkedList.append(13);
// linkedList.prepend(09);
// linkedList.insert(3,12);
// linkedList.insert(5,14);
// // linkedList.printList();
// linkedList.removeAtIndex(3);
// // linkedList.printList();
// linkedList.remove(13);
// linkedList.printList();
// const link = linkedList.reverse();
// // console.log(link);
// link.printList();
// console.log(linkedList.get(2))

module.exports= {
    LinkedList
}