/*
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". 
And you need to omit all the empty parenthesis pairs 
that don't affect the one-to-one mapping relationship between the string and the original binary tree.
*/

function TreeNode (val) {
  this.val = val;
  this.left = this.right = null;
}

let tree1 = new TreeNode(1);
tree1.right = new TreeNode(3);
tree1.left = new TreeNode(2);
tree1.left.left = new TreeNode(4);

var tree2str = function(t) {
  function helperPreOrder(root) {
    if(!root) return "";
    
    let val = root.val;
    let left = tree2str(root.left);
    let right = tree2str(root.right);

    if(!left && !right) {
      return `${val}`
    }
    if(!right) {
      return `${val}(${left})`
    }

    return `${val}(${left})(${right})`
  }

  return helperPreOrder(t);;
};

tree2str(tree1)


    // if(!left) {
    //   return `${val}()(${right})`
    // }