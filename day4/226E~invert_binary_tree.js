/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/

var invertTree = function(root) {
  
};

var treeTraversalInOrderIterative = function(root) {
  if(!root) return null;
  let stack = [];
  let currentNode = root;
  while(currentNode !== null || stack.length > 0) {
    while(currentNode !== null) {
      stack.push(currentNode);
      currentNode = currentNode.left;
      console.log(stack);
    }
    currentNode = stack.pop();
    console.log(currentNode.val);
    currentNode = currentNode.right;
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(4);
tree1.left = new TreeNode(2);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right = new TreeNode(7);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(9);

treeTraversalInOrderIterative(tree1);