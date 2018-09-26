/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
*/

// breadth first search
var averageOfLevels = function(root) {
  let queue = [];
  let data = [];
  let visitedNode;
  queue[0] = root;

  while(queue.size !== 0) {
    visitedNode = queue.shift();
    if(visitedNode.left) queue.push(visitedNode.left);
    if(visitedNode.right) queue.push(visitedNode.right);
    data.push(visitedNode.val)
  }
};


function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(3);
tree1.left = new Treenode(9);
tree1.right = new Treenode(20);
tree1.right.left = new Treenode(15);
tree1.right.right = new Treenode(7);