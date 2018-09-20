/*
Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  
For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
*/

// first attempt
var flipAndInvertImage = function(A) {
  for (let z = 0; z < A.length; z++) { // loops through each row of the image
    let currentArr = A[z];
    for(let k = 0; k < currentArr.length; k++) { // inverts all the entries
      currentArr[k] = currentArr[k] === 0 ? 1 : 0;
    }

    let i = 0;
    let j = currentArr.length - 1;
    while(i <= j) { // flips across x axis
      let temp = currentArr[i];
          currentArr[i] = currentArr[j];
          currentArr[j] = temp;
          i++;
          j--;
    }
  }
  return A;
};

// integration of 'reduce' function
var flipAndInvertImage = function(A) {
  return A.reduce((finalArr, currentArr) => {
    for(let k = 0; k < currentArr.length; k++) { // inverts all the entries
      currentArr[k] = currentArr[k] === 0 ? 1 : 0;
    }
    let i = 0;
    let j = currentArr.length - 1;
    while(i <= j) { // flips across x axis
      let temp = currentArr[i];
          currentArr[i] = currentArr[j];
          currentArr[j] = temp;
          i++;
          j--;
    }

    finalArr.push(currentArr); // pushs currentArr onto finalArr

    return finalArr; // must return finalArr as it is the accumulator

  },[]) // sets the starting value for 'finalArr'
};


flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]); // expect [1,0,0],[0,1,0],[1,1,1]


// fastest case from LeetCode
var flipAndInvertImage = function(A) {
  return A.reduce((finalArr, curr) => {
       
       for(var i=0; i<curr.length; i++){
           curr[i] = curr[i] === 0 ? 1 : 0
       }
      
       curr.reverse()
       
       finalArr.push(curr)
       
       return finalArr
   },[])       
};


flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]); // expect [1,0,0],[0,1,0],[1,1,1]