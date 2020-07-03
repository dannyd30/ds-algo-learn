/**
 * Trees
 *  - Heirarchial Data Structure
 *  - Examples of tree - DOM tree, Facebook or Instagram comments, Chess game with computer before ML,Abstract syntax tree
 * Binary tree -  Each parent can have either 0,1 or 2 children. Each child can have only one parent
 * Perfect Binary tree - All nodes have two children or no children (leaf nodes). All leaf nodes are in same level
 * Full binary tree - All nodes have two children or no children. But leaf nodes are NOT in same level
 */

 class TreeNode {
     constructor(value){
         this.value = value;
         this.children=[]
     }
 }

 const root = new TreeNode('A');
 const c1 = new TreeNode(1);
 const c2 = new TreeNode(2);
 const c3 = new TreeNode(3);

 root.children.push(...[c1,c2,c3]);
 console.log(root);

 /**
  * Binary Search tree - a perfect binary tree
  * 
  * Level 0 - 2^0 = 1 node
  * Level 1 - 2^1 = 2 nodes
  * Level 2 - 2^2 = 4 nodes
  * Level 3 - 2 ^3 = 8 nodes
  * 
  *  # of nodes  = 2^H(height) - 1
  * log nodes = height -> log 100 = 2 because 10^2 = 100
  */

  /**
   * AVL & Red Black trees
   * AVL & Red Black trees are Balaned BST which automatically balances itself on add/remove
   * 
   * AVL tree:
   * https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7
   * https://www.cs.usfca.edu/~galles/visualization/AVLtree.html
   * 
   * Red Black Tree:
   * https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5
   * https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
   * 
   * Diff bw AVL & Red Black tree:
   * https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree
   */