/*
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, 
where a move is incrementing n - 1 elements by 1.
*/

// maths solution
var minMoves = function(nums) {
  let total = 0;
  let min = Infinity;
  let length = nums.length
  for(let i = 0;i < length; i++) {
    total += nums[i];
    min = Math.min(min, nums[i]);
  }
  return total - min * length;
};

minMoves([1,2,3]);


// my attempt at brute force
var minMoves = function(nums) {
  let count = 0;
  if(nums.every(v => v === nums[0])) {
    return count;
  }
  while(true) {
    nums.sort((a, b) => a-b);
    nums[0]++;
    nums[1]++;
    count++;
    if(nums.every(v => v === nums[0])) {
      return count;
    }
  }
};
