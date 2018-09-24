/*
Given a positive integer N, find and return the longest distance between two 
consecutive 1's in the binary representation of N.

If there aren't two consecutive 1's, return 0.
*/

var binaryGap = function(N) {
  N = N.toString(2);
  let lastOneIndex = null;
  let largestGap = 0;
  for(let i = 0; i < N.length; i++) {
    if(N[i] === "1") {
      largestGap = Math.max(i - lastOneIndex, largestGap);
      lastOneIndex = i;
    }
  }
  return largestGap;
};


binaryGap(5); // expect 2
binaryGap(22); // expect 2
binaryGap(6); // expect 1
binaryGap(8); // expect 0
