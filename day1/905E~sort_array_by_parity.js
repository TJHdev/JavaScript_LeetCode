/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.
*/

var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];

    for(let int of A) {
      if(int % 2 === 0) {
        even.push(int);
      } else {
        odd.push(int);
      }
    }
    return even.concat(odd);
};


var sortArrayByParity = function(A) {
  let i=0;j=A.length-1;
  while(i<=j){ // multiple pointer method.
    if(A[i]%2!==0 && A[j]%2===0){ // if items being looked at are in the incorrect position
      let temp=A[i];  // directly swap them within the array.
      A[i]=A[j];
      A[j]=temp;
    } else {
      if(A[i]%2===0){ // if an item on the left hand side is EVEN look at the next (right)
          i++;
      }
      if(A[j]%2!==0){ // if an item on the left hand side is ODD look at the next (left)
          j--;
      }
    }
  }
  return A;
};


sortArrayByParity([3,1,2,4]); // expect [2,4,3,1]