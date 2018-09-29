/*
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is 
changed to the original key plus sum of all keys greater than the original key in BST.
*/

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
};

let tree1 = new TreeNode (5);
tree1.right = new TreeNode(13);
tree1.left = new TreeNode(2);

var convertBST = function(root) {
  let previousVal = 0;

  function helper(root) {
    if(!root) return null;
    helper(root.right);
    root.val += previousVal;
    previousVal = root.val;
    helper(root.left);
    return;
  }
  helper(root);

  return root;
};

convertBST(tree1);