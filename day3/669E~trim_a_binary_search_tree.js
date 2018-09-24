/*
Given a binary search tree and the lowest and highest boundaries as L and R, 
trim the tree so that all its elements lies in [L, R] (R >= L). 
You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

Input:               Output:
    3                 3
   / \               /
  0   4             2
   \               /
    2             1
   /
  1

  L = 1
  R = 3
*/

debugger
var trimBST = function(root, L, R) {
  if(root === null) return root;
  if(root.val > R) return trimBST(root.left, L, R);
  if(root.val < L) return trimBST(root.right, L, R);

  root.left = trimBST(root.left, L, R); 
  root.right = trimBST(root.right, L, R);
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(3);
tree1.left = new TreeNode(0);
tree1.left.right = new TreeNode(2);
tree1.left.right.left = new TreeNode(1);
tree1.right = new TreeNode(4);


trimBST(tree1, 1, 3)