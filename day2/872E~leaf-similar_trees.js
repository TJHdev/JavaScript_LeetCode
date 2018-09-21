/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  let result1 = [];
  let root1stack = [];
  while(root1){
    if(!root1.left && !root1.right) result1.push(root1)
    if(root1.left) root1stack.push(root1.left);
    if(root1.right) root1stack.push(root1.right);
    root1 = root1stack.pop();
  }
  
  let result2 = [];
  let root2stack = [];
  while(root2){
    if(!root2.left && !root2.right) result2.push(root2)
    if(root2.left) root2stack.push(root2.left);
    if(root2.right) root2stack.push(root2.right);
    root2 = root2stack.pop();
  }

  for (let i = 0; i < result1.length; i++) {
    if(result1[i].val !== result2[i].val) return false
  }
  return true
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(5);
tree1.left = new TreeNode(4);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(2);

leafSimilar(tree1);