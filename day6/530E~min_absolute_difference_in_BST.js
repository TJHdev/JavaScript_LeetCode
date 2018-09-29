/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:

  1
   \
    3
   /
  2

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(1);
tree1.right = new TreeNode(3);
tree1.right.left = new TreeNode(2);

var getMinimumDifference = function(root) {
  let result = [];
  let stack = [];
  let curr = root;
  let min = Infinity;

  while(stack.length !== 0 || Boolean(curr)) {
    if(Boolean(curr)){
      stack.push(curr);
      curr = curr.left
    } else {
      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
  }
  
  let difference;
  for(let i = 1; i < result.length; i++) {
    difference = Math.abs(result[i] - result[i-1]);
    if(difference < min) min = difference;
  }

  return min;
};

getMinimumDifference(tree1);