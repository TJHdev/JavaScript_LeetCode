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


trimBST(tree1, 1, 3);


function mytrimBST(root, L, R) {
  if(!root) return null;
  if(root.val < L) return trimBST(root.right, L, R);
  if(root.val > R) return trimBST(root.left, L, R);

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  return root;
}

mytrimBST(tree1, 1, 3);


function iterativeBSTtrim(root, L, R) {
  if(!root) return null;
  let node = root;

  while(node !== null) {
    if(node.val > R) node = node.left;
    else if(node.val < L) node = node.right;
    else if(L<= node.val && node.val <= R) break;
  }

  if(node === null) return node;

  // trim the left branch
  let curr = node;
  while(curr.left !== null) {

    if(curr.left.val < L) {curr.left = curr.left.right} // rejects entire left side and replaces with right node
    else curr = curr.left; // steps further down left ignoring right

    if(curr === null) break; // if the new stepped to node doesn't exist break out.
  }

  // trim the right branch
  curr = node; // resets back to root
  while(curr.right !== null) {

    if(curr.right.val > R) curr.right = curr.right.left
    else curr = curr.right // steps further down right ignoring left

    if(curr === null) break; // if the new stepped to node doesn't exist break out.
  }
  return node;
}

iterativeBSTtrim(tree1, 1, 3);