/**
  * Binary Search tree 
  * where the right child is greater than parent and left child is lesser than the parent
  * lookup - O(log n)
  * insert - O(log n)
  * delete - O(log n)
  * 
  * Level 0 - 2^0 = 1 node
  * Level 1 - 2^1 = 2 nodes
  * Level 2 - 2^2 = 4 nodes
  * Level 3 - 2 ^3 = 8 nodes
  * 
  *  # of nodes  = 2^H(height) - 1
  * log nodes = height -> log 100 = 2 because 10^2 = 100
  * 
  * Balanced vs UnBalanced BST
  * Unbalanced BST looks like Linked list so it will become O(n)
  * So for performance optimization we shud use Balanced BST
  */

class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        if(!this.root) {
            this.root = new BinaryNode(value);
            return this;
        }
        let node = this.root;
        //Without recursion
        while(true){
            if(value < node.value){
                if(node.left === null) {
                    node.left = new BinaryNode(value);
                    return;
                } else {
                    node = node.left;
                }
            } else {
                if(node.right === null) {
                    node.right = new BinaryNode(value);
                    return;
                } else {
                    node = node.right;
                }
            }
        }
    //    return this.insertAtLeaf(this.root,value); //using Recursion
    }

    insertAtLeaf(node,value){
        if(value > node.value){
            return (node.right === null) ?  node.right = new BinaryNode(value) : this.insertAtLeaf(node.right,value)
        } else {
            return (node.left === null) ? node.left = new BinaryNode(value)  : this.insertAtLeaf(node.left,  value);
        }
    }

    remove(value){
        //TO remove a node which has both children, we can either find in-order predecessor and replace with that
        //or find the in-order successor and replace with that
        //In-order predecessor -> right most child in left subtree
        //In-order successor -> left most child in right subtree
        let parent,current, dir;
        if(this.root.value === value){
            parent = null;
            current = this.root;
            if(!current.left && !current.right){
                this.root = null;
            } else if(!current.right || !current.left) {
                this.root= current.left || current.right;
            } else {
                let rightMostNode = this.getRightMostNodeWithParent(current.left,null);
                console.log(rightMostNode);//getting in-order predecessor
                if(!rightMostNode.parentNode ){
                    // parent.left = rightMostNode.node;
                    rightMostNode.node.right = current.right;
                    this.root = rightMostNode.node;
                } else {
                    // parent.right = rightMostNode.node;
                    this.root = rightMostNode.node;
                    rightMostNode.node.left = current.left;
                    
                     rightMostNode.node.right = current.right;
                    rightMostNode.parentNode.right = null;
   
                }
            }
            return this;
        } else {
            const lookupObj = this.lookupWithParent(this.root, value);
            if(!lookupObj) return 'No node to remove';
            parent = lookupObj.parent;
            current = lookupObj.current;
            dir = lookupObj.dir;
        }
        
        //Remove leaf node
        if(!current.right && !current.left){
            parent[dir] = null;
        } else if(!current.right  || !current.left){
            parent[dir] = current.right || current.left;
        } else {
            //parent
            //current
            /**
             *       9
             *      1   16
             *        10  20
             *       7  11
             */
             let rightMostNode = this.getRightMostNodeWithParent(current.left,null);
             console.log(!rightMostNode.parentNode);//getting in-order predecessor
             if(!rightMostNode.parentNode ){
                 parent.left = rightMostNode.node;
                 rightMostNode.node.right = current.right;
             } else {
                 parent.right = rightMostNode.node;
                 rightMostNode.node.left = current.left;
                 rightMostNode.parentNode.right = null;

             }

        }
        return this;
        

    }

    getRightMostNodeWithParent(node, parentNode){
        return !node.right ? {parentNode,node}: this.getRightMostNodeWithParent(node.right,node);
    }

    lookupWithParent(node, value){
        // if(this.root.value === value) return this.root;
        // return this.getNode(this.root,value);//using recursion

        if(node.value < value && node.right){
            return node.right.value === value ? {parent: node, current: node.right, dir: 'right'} : this.lookupWithParent(node.right,value);
        } else if(node.value > value && node.left){
            return node.left.value === value ? {parent: node, current: node.left, dir: 'left'} : this.lookupWithParent(node.left,value);
        } else {
            return this.root;
        }
    }

    lookup(value){
        if(this.root.value === value) return this.root;

        //Without recursion
        let node = this.root;
        while(true){
            if(node.value > value && node.left){
                if(node.left.value === value) return node.left;
                node = node.left;
            } else if(node.value < value && node.right){
                if(node.right.value === value) return node.right;
                node = node.right;
            } else {
                return false;
            }    
        }
        // return this.getNode(this.root,value);//using recursion
    }

    getNode(node, value){
        if(node.value < value && node.right){
            return node.right.value === value ? node.right : this.getNode(node.right,value);
        } else if(node.value > value && node.left){
            return node.left.value === value ? node.left : this.getNode(node.left,value);
        } else {
            return 'No such value';
        }
    }
}

const myBst = new BinarySearchTree();
myBst.insert(5);
myBst.insert(1);
myBst.insert(16);
myBst.insert(10);
myBst.insert(20);
myBst.insert(7);
myBst.insert(11);
myBst.insert(null);
/**
 *       9
 *      1   16
 *        10  20
 *       7  11
 */
console.log(myBst.lookupWithParent(myBst.root,0))
// console.log(JSON.stringify(traverse(myBst.root)));
// console.log('/n/n/n')
// myBst.remove(5);
// console.log(JSON.stringify(traverse(myBst.root)));
function traverse(node){
    const tree = {value: node.value};
    tree.left  = node.left === null ? null : traverse(node.left);
    tree.right  = node.right === null ? null : traverse(node.right);
    return tree;
}