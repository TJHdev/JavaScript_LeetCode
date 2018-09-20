/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}


var middleNode = function(head) {
  let currentNode = head;
  let hash = [];
  while(currentNode){
    hash.push(currentNode);
    currentNode = currentNode.next
  }
  return hash[Math.floor(hash.length/2)];
};


middleNode([1,2,3,4,5]); // [3,4,5]
middleNode([1,2,3,4,5,6]); // [4,5,6]