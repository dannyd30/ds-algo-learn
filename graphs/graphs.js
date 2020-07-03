/**
 * Graphs
 * 
 * Graphs have nodes/vertices which are connected to each other by edges
 * 
 * FB/Twitter - for social networking
 * Amazon - recommondations
 * Google - Google maps
 * 
 * Linked list are type of trees
 * Trees are type of Graphs
 * 
 * Types of Graphs:
 *      Directed or UnDirected
 *  ex: UnDirected Graph - fb -person connects to friend -> they are ur ffriend
 *  ex: Directed Graph - twitter or insta -> someone follows yu that doesnt necerrily mean yu follow them
 * 
 *      Weighted or Unweighted 
 *      -Weight or Unweighted doesnot mean the values in NODES. Its the value given to edges that makes a graph weighted or unweighted.
 *      
 *      Cyclic or Acyclic
 *      -> Cyclic are mostly common in weighted graph which is used in google maps
 */

 /**
  * EDGE LIST
  * 
  * Edge list implementation uses a 2D array which shows the connections between two nodes
  * 
  * Ex:
  * 
  *         2  ------- 0
  *        /  \
  *       1----3
  * 
  * Edge list for above graph is:
  * 
  */
 const graphEdge = [[0,2],[2,1],[2,3],[1,3]];

 /**
  * ADJACENT LIST/ADJACENCY
  * 
  * Adjacent list is where the index in array/key in obj denotes a nnode and its value denotes its connective nodes
  * 
  * For the same graph given above in edge list, the adjacent list is
  */
 const graphAdjacentArr = [[2],[2,3],[0,1,3],[1,2]] //index 0,1,2,3 denotes the node with values 0,1,2,3
 const graphAdjacentObj = {
     0: [2],
     1: [2,3],
     2: [0,1,3],
     3: [1,2]
 }

 /**
  * ADJACENT MATRIX
  * 
  * Where we use a matrix to denote whether the node is connected with other nodes or not
  * If its an unweighted graph, we use 0 & 1 to denote the connection
  * If its an weighted graph, we can use the weights to denote the connection
  * 
  * For the same graph given above in edge list, the adjacent matrix is:
  */

  const graphAdjacentMatrix = [
      [0,0,1,0],
      [0,0,1,1],
      [1,1,0,1],
      [0,1,1,0]
  ]; //index of the outer array is value of nodes
  //This can also be rewritten using objects
  const graphAdjacentMatrixObj = {
      0:[0,0,1,0],
      1:[0,0,1,1],
      2:[1,1,0,1],
      3:[0,1,1,0]
  }


  /**
   * Implementaion of UnDirected UnWeighted Graph using Adjacency list
   */
  class Graph{
      constructor(){
          this.numberOfNodes = 0;
          this.adjacencyList = {};
      }

      addVertex(node){
        if(!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
            this.numberOfNodes++;
        }
        return this;
      }

      addEdge(node1,node2){
        if(!this.adjacencyList[node1] || !this.adjacencyList[node1]) return 'Node missing';

        const firstNodeConnections =this.adjacencyList[node1];
        const secondNodeConnections =this.adjacencyList[node2];

        if(firstNodeConnections.indexOf(node2) !== -1 && secondNodeConnections.indexOf(node1) !== -1){
            return 'Already connected';
        } else {
            firstNodeConnections.push(node2);
            secondNodeConnections.push(node1);
        }

        return this;
        
      }

      showConnections(){}
  }
  const myGraph = new Graph();

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addEdge(0,1);
myGraph.addEdge(1,2);
console.log(myGraph);