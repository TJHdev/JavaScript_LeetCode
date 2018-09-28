/*
Given an array nums, write a function to move all 0's to the end 
of it while maintaining the relative order of the non-zero elements.
*/



// my naive implementation
var moveZeroes = function(nums) {
  let index = 0;
  let length = nums.length
  while(index < length) {
    if(nums[index] === 0) {
      nums.splice(index,1);
      nums.push(0);
      length --;
    } else {
      index++;
    }
  }
};

// fastest on LeetCode
var moveZeroes = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) { // fills up from the first slot with numbers
          nums[index] = nums[i];
          index++;
      }
  } // exists once end of the for loop
  while (index < nums.length) { // fills up the rest of the array with zeros
      nums[index] = 0;
      index++;
  }
};

moveZeroes([0,0,1]); // [1,0,0]
moveZeroes([0,1,0,3,12]); // [1,3,12,0,0]