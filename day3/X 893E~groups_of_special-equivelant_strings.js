/*
You are given an array A of strings.

Two strings S and T are special-equivalent if after any number of moves, S == T.

A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

Now, a group of special-equivalent strings from A is a non-empty subset S of A such that any string not in S is not special-equivalent with any string in S.

Return the number of groups of special-equivalent strings from A.
*/


var numSpecialEquivGroups = function(A) {
  let result = [];
  const length = A[0].length;
  let hash = new Array(128);
  A.forEach(unplacedString => {
    let matched = false;
    result.forEach(group => {
      let i = 0;


      // for(let i = 97; i < 123; i++) { // resets the hash to contain 0s
      //   hash[i] = 0;
      // }
      // for(let i = 0; i < length; i++) {
      //   hash[group[0].charCodeAt(i)] += 1
      // }
      // for(let i = 0; i < length; i++) {
      //   hash[unplacedString.charCodeAt(i)] -= 1
      // }
      let match = true;
      for(let i = 97; i < 123; i++) { // checks for a match
        if(hash[i] !== 0){
          match = false;
          break;
        }
      }
      if(!match) {
        return
      }
      group.push(unplacedString);
      matched = true;
    });
    if(!matched) {
      result.push([unplacedString]);
    }
  })
  return result;
};

numSpecialEquivGroups(["a","b","c","a","c","c"]); // expect 3
// Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]

numSpecialEquivGroups(["aa","bb","ab","ba"]); // expect 4
// Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]

numSpecialEquivGroups(["abc","acb","bac","bca","cab","cba"]); // expect 3
// Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]

numSpecialEquivGroups(["abcd","cdab","adcb","cbad"]); // expect 1
// Explanation: 1 group ["abcd","cdab","adcb","cbad"]