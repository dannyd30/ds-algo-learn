class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    insert(index, value){
        if(index === 0){
            this.prepend(value);
        } else if(index >= this.length){
            this.append(value);
        } else {
            const newNode = new Node(value);
            let currNode = this.getNodeAtIndex(index);
            newNode.next = currNode;
            newNode.prev = currNode.prev;
            currNode.prev.next = newNode;
            currNode.prev = newNode;
            this.length++;
        }
    }

    removeAtIndex(index){
        if(index === 0){
            this.head = this.head.next;
            this.head.prev = null;
        } else if(index >= this.length){
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            const currNode = this.getNodeAtIndex(index);
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
        }
        this.length--;
    }

    getNodeAtIndex(index){
        let i=1;
        let node = null;
        if(index > this.length/2){
            i = this.length-1;
            node = this.tail;
            while(node && index!== i){
                node = node.prev;
                i--;
            }
        
        } else {
            i=1;
            node = this.head.next;
            while(node && index !== i){
                console.log(node.value);
                node =node.next;
                i++
            }
        }
        return node;
    }

    printList(){
        let node = this.head;
        let str = '';
        while(node){
            str += `${node.value}`;

            node = node.next;
            if(node) str+= ' --> '
        }

        console.log(str);
    }
}

const doublyLinkedList  = new DoublyLinkedList(1);
doublyLinkedList.append(2);
doublyLinkedList.append(4);
doublyLinkedList.append(5);
doublyLinkedList.append(6);
doublyLinkedList.prepend(0);
doublyLinkedList.printList();
doublyLinkedList.insert(3,3);
doublyLinkedList.printList();
doublyLinkedList.insert(1,11);
doublyLinkedList.printList();
// console.log(doublyLinkedList);
doublyLinkedList.removeAtIndex(1);
doublyLinkedList.printList();
console.log(doublyLinkedList)
