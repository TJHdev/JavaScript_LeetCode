/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. 
Return True if and only if A can become B after some number of shifts on A.
*/


var rotateString = function(A, B) {
  let lengthA = A.length;
  let lengthB = B.length;
  if(A === B) return true;
  if(lengthA !== lengthB) return false;
  for(let i = 0; i < lengthB; i++) {
    if(A === B) return true;
    A = A.substring(1) + A[0];
  }
  return false;
};
rotateString("","");
rotateString('abcde', 'abced'); // expect false
rotateString('abcde', 'cdeab'); // expect true


// leetcode fastest
var rotateString = function(A, B) {
  if (A === B) {
      return true;
  }
  const firstLetter = A[0];
  let splitIndex = B.indexOf(firstLetter); // goes straight to the arrangement in b to see if it can make a match
  if (splitIndex < 0) {
      return false;
  }
  while (splitIndex > 0) {
      if (A === B.slice(splitIndex) + B.slice(0, splitIndex)) {
          return true;
      }
      splitIndex = B.indexOf(firstLetter, splitIndex + 1)
  } 
  return false;
};