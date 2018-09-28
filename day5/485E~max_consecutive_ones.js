/*
Given a binary array, find the maximum number of consecutive 1s in this array.

*/



var findMaxConsecutiveOnes = function(nums) {
  let counter = 0;
  let max = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) {
      counter++
      max = Math.max(counter, max);
    } else {
      counter = 0;
    }
  }
  return max;
};

findMaxConsecutiveOnes([1,1,0,1,1,1]);