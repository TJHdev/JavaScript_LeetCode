/*
At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, 
and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  
You must provide the correct change to each customer, 
so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.
*/

var lemonadeChange = function(bills) {
  let hash = {};

  for(let cash of bills) {
    if(hash[cash] === undefined) {
      hash[cash] = 1;
    } else {
      hash[cash]++;
    }

    let changeRequired = cash - 5;
    if(changeRequired === 15 ) {
      if(hash[10] > 0 && hash[5] > 0) {
        hash[10]--;
        hash[5]--;
      } else if (hash[5] > 2) {
        hash[5] -= 3;
      } else {
        return false;
      }
    } else if (changeRequired === 5) {
      if(hash[5] > 0) {
        hash[5] --;
      } else {
        return false;
      }
    }
  }
  return true;
};

lemonadeChange([5,5,5,10,20]); // expect true
lemonadeChange([5,5,10]); // expect true
lemonadeChange([10,10]); // false
lemonadeChange([5,5,10,10,20]); // false


// Leetcode solution, ignores storing 20s and simply uses ints instead of a hash.
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  
  return bills.every(b => {
    if (b === 5) {
      five++;
      return true;
    } 
    
    if (b === 10) {
      five--;
      ten++;
    } else if (b === 20) {
      if (ten > 0) {
        ten--;
        five--;
      } else {
        five -= 3;
      }
    }
    return (five >= 0 && ten >= 0) ? true : false
  });
};