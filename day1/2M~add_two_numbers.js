// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    
  let result = new ListNode(0);
  let cur = result;
  let p = l1;
  let q = l2;
  let carry = 0;

  while(p || q) { // makes sure there are two digits
    let qval;
    let pval;

    if (q) {
      qval = q.val;
      q = q.next
    } else {
      qval = 0;
    }

    if (p) {
      pval = p.val;
      p = p.next;
    } else {
      pval = 0;
    }

    let val = qval + pval + carry; // totals up from the previous round plus the two new digits

    if(val > 9) {
      carry = 1;
      val %= 10;
    } else {
      carry = 0;
    }

    cur.next = new ListNode(val); // creates a new node with the correct value
    cur = cur.next; // sets current to now be next.
  }

  if(carry !== 0){ // if there are no more digits to add, check if there is a 10* to carry over
    cur.next = new ListNode(1); // creates new node and sets it as next.
  }

  return result.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list1 = new ListNode();
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
list1.next.next.next = new ListNode(3);


let list2 = new ListNode();
list2.next = new ListNode(5);
list2.next.next = new ListNode(6);
list2.next.next.next = new ListNode(4);

addTwoNumbers(list1.next, list2.next)



// addTwoNumbers([2,4,3],[5,6,4]); // expects 807