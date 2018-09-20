/*
Let's call an array A a mountain if the following properties hold:

A.length >= 3
There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
*/



var peakIndexInMountainArray = function(A) {
  return A.indexOf(Math.max(...A));
};

var peakIndexInMountainArray = function(A) {
  let low = 0;
  let high = A.length - 1;
  let mid;
  while(low < high) {
    mid = Math.floor((high + low) / 2);
    if(A[mid] < A[mid + 1]) { // if the mid point is still climbing move the low pointer up to the mid + 1;
      low = mid + 1;
    } else { // if the mid point is decending move the high pointer down.
      high = mid;
    }
  }
  return low;
};


peakIndexInMountainArray([0,1,0]); // expect 1
peakIndexInMountainArray([0,2,1,0]); // expect 1