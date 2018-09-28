/*
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, 
and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, 
they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, 
and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.
*/

var fairCandySwap = function(A, B) {
  let Atotal = A.reduce((prev, curr) => prev + curr, 0);
  let Btotal = B.reduce((prev, curr) => prev + curr, 0);
  let target = (Atotal + Btotal) / 2; 

  for(let i = 0; i< A.length; i++) {
    if(B.indexOf(target - (Atotal - A[i])) !== -1) {
      return [A[i], target - (Atotal - A[i])];
    }
  }
};

// make use of set (hashMap to speed up checks)
var fairCandySwap = function(A, B) {
  let Atotal = A.reduce((prev, curr) => prev + curr, 0);
  let Btotal = B.reduce((prev, curr) => prev + curr, 0);
  let target = (Atotal + Btotal) / 2; 

  let set = new Set(B);

  for(let i = 0; i< A.length; i++) {
    if(set.has(target - (Atotal - A[i]))) {
      return [A[i], target - (Atotal - A[i])];
    }
  }
};

fairCandySwap([2], [1,3]); // expect [2,3]
fairCandySwap([1,1], [2,2]); // expect [1,2]
fairCandySwap([1,2], [2,3]); // expect [1,2]