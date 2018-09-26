/*
You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2. 
Find all the next greater numbers for nums1's elements in the corresponding places of nums2.

The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2. 
If it does not exist, output -1 for this number.
*/

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let result = [];
  for(let i = 0; i < findNums.length; i++) {
    let found = false;
    let startIndex = nums.indexOf(findNums[i]) + 1;
    if(startIndex === 0) startIndex = Infinity;
    for(let j = startIndex; j < nums.length; j++) {
      if(findNums[i] < nums[j]) {
        found = true;
        result.push(nums[j]);
        break;
      }
    }
    if(!found) {
      result.push(-1);
    }
  }
  return result;
};

nextGreaterElement([4,1,2], [1,2,3,4]); // expect [-1,2,3]
nextGreaterElement([2,4], [1,2,3,4]); // expect [3,-1]
nextGreaterElement([4,1,2], [1,3,4,2]); // expect [-1,3,-1]

