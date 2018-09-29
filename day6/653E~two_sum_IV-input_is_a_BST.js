/*
Given a Binary Search Tree and a target number, 
return true if there exist two elements in the
BST such that their sum is equal to the given target.

    5
   / \
  3   6
 / \   \
2   4   7

target: 9 = true

    5
   / \
  3   6
 / \   \
2   4   7

target: 28 = false;
*/

var findTarget = function(root, k) {
  let arr = recursiveHelper(root);

  function recursiveHelper (root) {
    if(!root) return null;
    let result = [];
    let stack = [];
    let curr = root;


    while(true) {
      while(Boolean(curr)) {
        stack.push(curr);
        curr = curr.left;
      }

      if(stack.length === 0) break;

      curr = stack.pop();
      result.push(curr.val);
      curr = curr.right;
    }
    return result;
  }

  let i = 0;
  let j = arr.length - 1;
  let targetFound = false;
  while(i < j) {
    let currentTotal = arr[i] + arr[j];
    if(currentTotal > k) {
      j--;
    } else if (currentTotal < k) {
      i++
    } else {
      targetFound = true;
      break;
    }
  }

  return targetFound;
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(5);
tree1.left = new TreeNode(3);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(4);
tree1.right = new TreeNode(6);
tree1.right.right = new TreeNode(7);

findTarget(tree1);