/*
Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

var majorityElement = function(nums) {
  let hash = {};
  let target = nums.length / 2;
  for(let num of nums) {
    if(hash[num] === undefined) {
      hash[num] = 1;
    } else {
      hash[num]++;
    }
  }
  for(let num in hash) {
    if(hash[num] > target) {
      return Number(num);
    }
  }
};

majorityElement([3,2,3]); // expect 3;
majorityElement([6,5,5]); // expect 5;

majorityElement([2,2,1,1,1,2,2]); // expect 2