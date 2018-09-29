/*
Reverse a singly linked list.
*/


function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);


var reverseList = function(head) {
  let curr = head;
  let prev = null;
  let next;

  while(Boolean(curr)) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

reverseList(list1)