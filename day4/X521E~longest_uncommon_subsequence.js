/*
Given a group of two strings, you need to find the longest uncommon subsequence of this group of two strings. 
The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be any subsequence of the other strings.

A subsequence is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. 
Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.

The input will be two strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn't exist, return -1.
*/

var findLUSlength = function(a, b) {
  if(b.length > a.length) {
    let temp = b;
        b = a;
        a = temp;
  }
  let max = -1;
  for(let i = 0; i < a.length; i++) {
    for(let j = a.length; j > i; j--) {
      if(!b.includes(a.substring(i,j))) {
        max = Math.max(max, j-i);
      }
    }
  }
  return max;
};


// stupid trick question...
var findLUSlength = function(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length)
};

findLUSlength("abc", "cdc"); // expect "3"