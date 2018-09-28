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

**
* @param {TreeNode} root
* @return {TreeNode}
*/

 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }

let tree1 = new TreeNode(5);
tree1.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.left.left = new TreeNode(2);
tree1.left.left.left = new TreeNode(1);
tree1.right = new TreeNode(6);
tree1.right.right = new TreeNode(8);
tree1.right.right.left = new TreeNode(7);
tree1.right.right.right = new TreeNode(9);



var increasingOrderSearchTree = function(root) {
  if(!root) return null;
  let result = [];
  let callStack = [];
  let currentNode = root;


  while(true) {
    while(Boolean(currentNode)) {
      callStack.push(currentNode);
      currentNode = currentNode.left;
    }

    if(callStack.length === 0) break;
    
    currentNode = callStack.pop();
    result.push(currentNode);
    currentNode = currentNode.right;
  }
  

  result.forEach((node, i) => {
    if(result[i + 1]) {
      node.right = result[i + 1];
    } else {
      node.right = null;
    }
    
    node.left = null;
  })

  return result[0];
}

increasingOrderSearchTree(tree1);




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