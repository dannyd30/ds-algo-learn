/**
 * Objects can be used as Hash tables
 * But for learning purposes we will be creating a hash table using arrays and hash function
 */

class HashTable {
    constructor(len){
        this.data = new Array(len);
    }

    /**
     * Hash function 
     * Used to generate a key
     * {@param} key : the actual key to be hashed
     */
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length;i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            
        }
        return hash;
    }

    /**
     * Needto use 2D array beecause hash table may already have data in same addres
     * So v use another array to avoid collision
     * Instead of array v can also use linked list here
     */
    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]) this.data[address] = [];
        this.data[address].push([key,value]);
    }

    get(key){
        let address = this._hash(key);
        if(this.data[address]){
            if(this.data[address].length === 1) return this.data[address][0][1];
            for(let i=0;i<this.data[address].length;i++){
                if(this.data[address][i][0] === key) return this.data[address][i][1];
            }
        }
        return undefined;
    }

    keys() {
        let keyArr = [];

        for(let i=0;i<this.data.length;i++){
            if(this.data[i].length){
                if(this.data[i].length === 1) keyArr.push(this.data[i][0][1]);
                else {
                    for(let j=0;j<this.data[i].length;j++){
                        keyArr.push(this.data[i][j][0]);
                    }
                }
            }
        }
        return keyArr;
    }
}

let hash = new HashTable(1);
hash.set('first',10);
hash.set('first22',110);
hash.get('first');
console.log(hash.get('first22'));
console.log(hash.keys());