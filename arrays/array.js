//in js yu simply use Array
const strings = ['a','b','c','d'];
strings.pop(); //removes the last element of array O(1) since it doesnt have to reassign index
strings.push('d');//pushes to end of array O(1) since it doesnt have to reassing index
strings.unshift('x');//pushes to front of array but O(n) since all index needs to be changed
strings.shift(); //removes the first element of array O(n) since it needs  to reassign index
//To add element inbetween array use splice(indexwheretoadd, deletecount,newvalue)

strings.splice(2,0,'e'); // ['a','b','e','c','d'] O(n/2) -> O(n)

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(value){
        this.data[this.length++] = value;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    
}

let a1 = new MyArray();
a1.push(1);
console.log(a1.pop());