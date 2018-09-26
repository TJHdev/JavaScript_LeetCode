/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

var singleNumber = function(nums) {
  let hash = {}
  for(let i = 0;i< nums.length; i++) {
    if(!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] = 0;
    }
  }
  let result = Object.entries(hash);
  for(let i = 0; i < result.length; i++) {
    if(result[i][1] === 1) {
      return Number(result[i][0])
    }
  }
};

// LeetCode bitwise implementation 
// automatically adds and takes away
var singleNumber = function(nums) {
  let result = nums[0];
  for(let i = 1; i < nums.length; i++)
      result ^= nums[i];
  return result;
};

singleNumber([4,1,2,1,2]); // expect 4
singleNumber([2,2,1]); // expect 1

