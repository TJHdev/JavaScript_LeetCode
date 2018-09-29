/*
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Given linked list -- head = [4,5,1,9], which looks like following:

4 -> 5 -> 1 -> 9
*/




var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list1 = new ListNode(4);
list1.next = new ListNode(5);
list1.next.next = new ListNode(1);
list1.next.next.next = new ListNode(9);

deleteNode(list1, list1.next); // expect [4,1,9];