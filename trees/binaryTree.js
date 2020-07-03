class Node {
    constructor(val=null,left=null,right=null){
        this.value = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
constructor(data,left,right){
        this.root   = new Node(data,left,right);
        this.root.left = new Node(2);
		this.root.right = new Node(3);
		this.root.left.left = new Node(4);
		this.root.left.right = new Node(5);
		// this.root.left.right.left = new Node(6);
		// this.root.left.right.left.right = new Node(7);
		// this.root.left.left.left = new Node(8);
    }

    getHeight(node){
        if(node !== null){
            return 1+Math.max(this.getHeight(node.left),this.getHeight(node.right))
        }
        return 0;
    }

    getDiameter(node){
        if(node !== null){
            let leftHeight = this.getHeight(node.left);
            let rightHeight = this.getHeight(node.right);

            let leftDiameter = this.getDiameter(node.left);
            let rightDiameter = this.getDiameter(node.right);
console.log(leftDiameter);
console.log(rightDiameter);
console.log(leftHeight);
console.log(rightHeight);
            return Math.max((leftHeight+rightHeight+1), Math.max(leftDiameter,rightDiameter))-1;
        }
        return 0;
    }
}

let b1= new BinaryTree(1);
b1.getDiameter(b1.root);