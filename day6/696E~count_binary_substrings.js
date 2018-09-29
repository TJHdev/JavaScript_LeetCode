/*
Give a string s, count the number of non-empty (contiguous)
 substrings that have the same number of 0's and 1's, and all the 0's and 
 all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.
*/



var countBinarySubstrings = function(s) {
  let resultCount = 0;
  let digitCount;

  for(let i = 0; i < s.length; i++) {
    let index = i;
    let startingDigit = s[index];
    digitCount = 0;
    while(s[index] === startingDigit && index < s.length) {
      digitCount++;
      index++;
    }
    while(s[index] !== startingDigit && index < s.length) {
      digitCount--;
      if(digitCount === 0) {
        resultCount++;
        break;
      }
      index++;
    }
    
  }
  return resultCount;
};

var countBinarySubstrings = function(s) {
  if (s.length <= 1) return 0;
  var preRun = 0; 
  var curRun = 1;
  var count = 0 

  for (var i = 1; i < s.length; i++) { 
    if (s[i - 1] === s[i]) curRun++; // 'tallies curr length'
    else { 
        preRun = curRun; 
        curRun = 1;      // '01' or '10' should add to count
    }
    if (preRun >= curRun) count++;
  }
  return count;   
};

countBinarySubstrings("00110011"); // expect 6;
//Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
countBinarySubstrings("10101"); // expect 4;
//Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.