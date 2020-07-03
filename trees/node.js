export class Node {
    constructor(val=null,parent=null,children=[]){
        this.value = val;
        this.parent = parent;
        this.children = children;
    }
}

/**ES5 version
 * function Node(val,p){
 *  this.value = val || null;
 * this.parent = p || null;
 * this.children = [];
 * }
 */