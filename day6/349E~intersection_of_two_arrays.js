// Given two arrays, write a function to compute their intersection.

var intersection = function(nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();

  result = [];

  nums1.forEach(num => {
    set1.add(num);
  });
  nums2.forEach(num => {
    set2.add(num);
  });

  let set1Object = set1.keys();

  for(let key of set1Object) {
    if(set2.has(key)) {
      result.push(key);
    }
  }
  return result;
};

intersection([1,2,2,1], [2,2]); // expect [2]

intersection([4,9,5], [9,4,9,8,4]); // expect [9,4]