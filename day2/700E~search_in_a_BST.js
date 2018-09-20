/*
Given the root node of a binary search tree (BST) and a value. 
You need to find the node in the BST that the node's value equals the given value. 
Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

For example, 

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2
You should return this subtree:

      2     
     / \   
    1   3
In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.

Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


// iterative solution
var searchBST = function(root, val) {
  let notFound = true;
  while(root && notFound) {
    if(val > root.val) {
      root = root.right;
    } else if (val < root.val) {
      root = root.left;
    } else {
      notFound = false;
    }
  }
  if(notFound) return [];
  return root;
};

// recursive solution from LeetCode
var searchBST = function(root, val) {
  if(!root) return [];
  if(root.val === val) return root
  
  if(val > root.val) {
    return searchBST(root.right, val);    
  } else {
    return searchBST(root.left, val);
  } 
};