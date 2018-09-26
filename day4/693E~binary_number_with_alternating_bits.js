/*
Given a positive integer, check whether it has alternating bits: 
namely, if two adjacent bits will always have different values.
*/

var hasAlternatingBits = function(n) {
  n = n.toString(2);
  arr = [];
  for(let i = 0; i < n.length; i++) { 
    arr.push(+n.charAt(i)); // converts it to an array of numbers vs a string, this is quicker for comparisons.
  }
  for (let i = 1; i < arr.length; i++) {
    if(arr[i-1] === arr[i]) {
      return false
    }
  }
  return true;
};

hasAlternatingBits(5); // expect true - 101
hasAlternatingBits(7); // expect false - 111
hasAlternatingBits(11); // expect false - 1011
hasAlternatingBits(10); // expect true - 1010
