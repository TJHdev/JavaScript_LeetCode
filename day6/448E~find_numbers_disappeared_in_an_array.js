/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? 
You may assume the returned list does not count as extra space.
*/

var findDisappearedNumbers = function(nums) {
  let max = nums.length;
  let set = new Set();
  let result = [];

  nums.forEach(num => {
    set.add(num);
  });
  for(let i = 1; i <= max; i++) {
    if(!set.has(i)) {
      result.push(i);
    }
  }
  return result;
};

// leetcode best solution
const findDisappearedNumbers = nums => {
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    const index = Math.abs(nums[i]) - 1; // uses negative number trick to signify that the numbers is contained
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  for (let i = 0; i < len; i += 1) { // if the number at a given index is not negative, push to result
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]); // expect [5,6];