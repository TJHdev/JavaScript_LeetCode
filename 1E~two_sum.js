// function twoSum(nums, target) {
//   const hash = {};
//   let num;
//   for(let i = 0; i < nums.length; i++) {
//     num = nums[i];
//     if(hash[target - num] !== undefined){ // there is a match between the current number and one stored in the hash
//       return [hash[target - num], i]; // return the required
//     } else { // if there is no match
//       hash[num] = i; // stores the index for recalling
//     }
//   }
//   return [];
// }

function twoSum(nums, target) {
  const hash = {};
  for(let i = 0; i < nums.length; i++) {
    if(hash[target - nums[i]] !== undefined){ // there is a match between the current number and one stored in the hash
      return [hash[target - nums[i]], i]; // return the required
    } else { // if there is no match
      hash[nums[i]] = i; // stores the index for recalling
    }
  }
  return [];
}