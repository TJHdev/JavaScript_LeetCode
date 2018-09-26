/*
Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, 
and every node has no left child and only 1 right child.

input:

       5                  
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

expect:

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  

 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


var increasingBST = function(root) {
  // need in order traversal
  let data = [];
  let currentNode;
  if(root) {
    currentNode = root;
  } else {
    return data;
  }
  function traverse(node) {
    if(node.left) traverse(node.left);
    data.push(node);
    if(node.right) traverse(node.right);
  }
  traverse(currentNode);

  data.forEach((node, index) => {
    node.left = null;
    node.right = data[index + 1] ? data[index + 1] : null;
  })
  return data[0];
};

// LeetCode implementation
var increasingBST = function(root) {
  return dfs(root);
};

function dfs(node, parent) {
  if (!node) return parent;
  let result = dfs(node.left, node);
  node.right = dfs(node.right, parent);
  node.left = null;
  return result;
}