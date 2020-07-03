/**
 * Trie
 * Specialised tree use for searching, most often for text
 * most often it can outperform BST hash tables and other datastructures
 * 
 * Trie allows you to know if a word or part of word exists in a body of text
 * 
 * Trie usually has a empty root node
 * Trie is also called prefix trie
 * 
 * Uses:
 * 
 * Autocomplete
 * Dictionary
 * IP Routing
 * Search engines
 * 
 * Time complexity - O(length of word)
 * 
 * Search for ARE in below ex: O(3)
 */

//Example
/**
 *             Start-null
 *     A       D          N           Z
 *    R  S    O        E     O         E
 *   E       T        W        T         N
 *                   S
 */
class TrieNode {
    constructor(value=null) {
        this.isEndOfWord = false;
        this.children = {};
        this.value = value;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(key) {
        const length = key.length;
        let node = this.root;
        let level;
        let index;

        for (level = 0; level < length; level++) {
            index = key.charAt(level);
            if (!node.children[index]) {
                node.children[index] = new TrieNode(index);
            }
            node = node.children[index];
        }

        node.isEndOfWord = true;
    }

    search(key) {
        const length = key.length;
        let index;
        let node = this.root;
        let level = 0;
        for (level = 0; level < length; level++) {
            index = key.charAt(level);
            console.log(index);
            console.log(node);
            if (!node || !node.children || !node.children[index]) return false;
            node = node.children[index];
            console.log(node);
        }

        return node && node.isEndOfWord;
    }

    // print() {
    //     if (!this.root) {
    //         console.log('Empty Trie');
    //         return;
    //     }

    //     let node = this.root;

    //     this.printNode(node,'');


        
    // }

    // printNode(node,str){
    //     const children = node && node.children || [];
    //     // console.log(children);
    //     console.log(node);

    // }
}

const myTrie = new Trie();
myTrie.insert('the');
// myTrie.insert('three');
//  console.log(myTrie);
// myTrie.search('three');
// myTrie.search('these');
// console.log(JSON.stringify(myTrie));
myTrie.print()

