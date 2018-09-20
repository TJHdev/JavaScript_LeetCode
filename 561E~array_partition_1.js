/*
Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

*/

var arrayPairSum = function(nums) { // my slow implementation of a merge sort algorithm
  function merge (arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
   
    while (i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }
    if(i < arr1.length) {
      results = results.concat(arr1.slice(i))
    } else {
      results = results.concat(arr2.slice(j))
    }
    return results
  }

  function mergeSort (arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  let sortedArray = mergeSort(nums);

  let total = 0;
  for (let i = 0; i < sortedArray.length; i+=2) {
    total += sortedArray[i]
  }
  return total;
};


var arrayPairSum = function(nums) {
  let sortedArray = nums.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < sortedArray.length; i+=2) {
    total += sortedArray[i]
  }
  return total;
};


// example I'd like to learn from!
let arrayPairSum = function(nums) {
  let hash = new Array(20000).fill(0);  // fills out an empty array.

  let sum = 0, min = Infinity, max = -Infinity;
  for (let i = 0; i < nums.length; ++i) {
      let num = nums[i] + 10000;
      ++hash[num];
      min = Math.min(min, num); // sets range for the final calculation pass
      max = Math.max(max, num);
  }
  let take = 1; // flip flops between 0 and 1
  for(let i = min; i <= max; ++i){ // pre increment has slight performance benefits.
      if (!hash[i]) continue;
      for(let j = 0; j < hash[i]; ++j) {
          if (take) {
              sum += i - 10000;
          }
          take ^= 1; // bitwise operator. on-off
      }
  }
  return sum;
};


arrayPairSum([1,4,3,2]); // expect 4

// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).