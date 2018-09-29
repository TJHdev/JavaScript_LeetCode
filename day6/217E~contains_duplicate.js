/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
  let set = new Set();
  for(let num of nums) {
    if(set.has(num)) return true;
    set.add(num);
  }
  return false;
};

containsDuplicate([1,2,3,1]); // true
containsDuplicate([1,2,3,4]); // false

// leetcode fastest

var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length;
};