/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/



var maxDepth = function(root) {
  if(!root) return 0;
  if(root.left && root.right) return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  if(root.left) return 1 + maxDepth(root.left);
  if(root.right) return 1 + maxDepth(root.right);
  return 1;
};

var maxDepth = function(root) {
  if(root == null) return 0;
  var leftHt = maxDepth(root.left);
  var rightHt = maxDepth(root.right);
  return Math.max(leftHt, rightHt) + 1;
};

var maxDepth = function(root) {
  // You are starting with a default depth of 0
  let max = 0;
	
  // Since we are looking for the depth we'll be using a depth first search
  // The initial values are set to the root and the max for simplicity
  const DFS = (node = root, depth = max) => {
    // Condition to check if the node doesn't have children
    if (node === null) {
		  // set max to the maximum value of either max or depth
      max = Math.max(max, depth);
      return;
    }
    // Check each left and right. The next recursive call will check to see if it is null
    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  }
	// Call the Depth First Search
  DFS();
  return max;
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(3);
tree1.left = new TreeNode(9);
tree1.right = new TreeNode(20);
tree1.right.left = new TreeNode(15);
tree1.right.right = new TreeNode(7);

maxDepth(tree1);


function maxDepthIterative(root) {
  let maxDepth = 0;
  let stack = [];
  let result = [];
  let curr = root;


  while(Boolean(curr) || stack.length !== 0) {
    if(Boolean(curr)) {
      stack.push(curr);
      curr = curr.left;
    } else {
      console.log(stack)
      maxDepth = Math.max(maxDepth, stack.length);
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  } 
  return maxDepth;
}

maxDepthIterative(tree1);