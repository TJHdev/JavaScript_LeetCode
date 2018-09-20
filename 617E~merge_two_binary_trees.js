/*
Given two binary trees and imagine that when you put one of them to cover the other, 
some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. 
The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. 
Otherwise, the NOT null node will be used as the node of new tree.

Tree 1                     Tree 2                  
      1                         2                             
     / \                       / \                            
    3   2                     1   3                        
   /                           \   \                      
  5                             4   7   

Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
   5   4   7
   
*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(5);
tree1.right = new TreeNode(2);

let tree2 = new TreeNode(2);
tree2.left = new TreeNode(1);
tree2.left.right = new TreeNode(4);
tree2.right = new TreeNode(3);
tree2.right.right = new TreeNode(7);

var mergeTrees = function(t1, t2) {
  if(!t1) {
    return t2;
  };
  if(!t2) {
    return t1;
  };
  // if passing both nodes exist on either tree
  
  // sets up the first tree correctly (t1)
  t1.val += t2.val; 
  t1.left = mergeTrees(t1.left, t2.left); // recursive call to setup the children.
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

mergeTrees(tree1, tree2);

