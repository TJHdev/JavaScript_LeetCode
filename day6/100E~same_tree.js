/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
*/

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}


let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);


var isSameTree = function(p, q) {
  
  function DFS1(root) {
    if(!root) return;
    if(root.left) DFS1(root.left);
    else result1.push(null);
    result1.push(root.val);
    DFS1(root.right);
  }
  function DFS2(root) {
    if(!root) return;
    if(root.left) DFS2(root.left);
    else result2.push(null);
    result2.push(root.val);
    DFS2(root.right);
  }

  result1 = [];
  DFS1(p);
  result2 = [];
  DFS2(q);

  if(result1.length !== result2.length) return false;

  for(let i = 0; i < result1.length; i++) {
    if(result1[i] !== result2[i]) return false;
  }
  return true;
};

isSameTree(tree1, tree2);

isSameTree(tree1,tree1);


// leetcode best

var isSameTree = function(p, q) {
  if(!p && !q) return true
  if(!p || !q) return false
  if(p.val !== q.val) return false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};