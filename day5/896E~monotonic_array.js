/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.
*/

var isMonotonic = function(A) {
  let index = 0;
  let ascending;
  while(index < A.length - 1) {
    if(A[index] < A[index + 1]) {
      ascending = true;
      index++;
      break;
    }
    if(A[index] > A[index + 1]) {
      ascending = false;
      index++;
      break;
    }
    index++;
  }
  while(ascending === true && (index < A.length - 1)){
    if(A[index] > A[index + 1]) return false
    index++;
  }
  while(ascending === false && (index < A.length - 1)){
    if(A[index] < A[index + 1]) return false
    index++;
  }
  return true;
};


isMonotonic([1,2,2,3]); // expect true
isMonotonic([6,5,4,4]); // expect true
isMonotonic([1,3,2]); // expect false
isMonotonic([1,2,4,5]); // expect true