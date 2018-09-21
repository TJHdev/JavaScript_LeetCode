/*
Given a string S and a character C, return an array of integers 
representing the shortest distance from the character C in the string.
*/


var shortestToChar = function(S, C) {
  let len = S.length;
  let zeroIndexs = [];
  let result = new Array(len);
  for(let i = 0; i < len; i++) {
    if(S[i] === C) zeroIndexs.push(i);
  }
  for(let i = 0; i < len; i++) {
    result[i] = zeroIndexs.reduce((lowest, currentValue) => {
      let difference = Math.abs(i - currentValue);
      if(difference < lowest) {
        lowest = difference;
      }
      return lowest
    }, Infinity)
  }
  return result;
};


shortestToChar("loveleetcode", 'e'); 
// expect [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// indexs [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]