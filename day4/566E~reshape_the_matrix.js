/*
In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, 
respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
*/

var matrixReshape = function(nums, r, c) {
  let currentCount = nums.length * nums[0].length;
  let proposedCount = r * c;
  if(currentCount !== proposedCount) {
    return nums;
  }
  nums = nums.reduce((previousArray, currentArray) => {
    return previousArray.concat(currentArray);
  },[])
  nums.reverse();

  let newArray = []; // note constructing using new Array caused a problem?
  for(let i = 0; i < r; i++) {
    newArray[i] = [];
    for(let j = 0; j < c; j++) {
      newArray[i][j] = 0;
    }
  }

  for(let i = 0; i < r; i++) {
    for(let j = 0; j < c; j++) {
      newArray[i][j] = nums.pop();
    }
  }

  return newArray;
};



// nums = [[1,2],[3,4]], r = 4, c = 1
matrixReshape([[1,2],[3,4]], 4 , 1); // expect [[1,2,3,4]];

// nums = [[1,2],[3,4]], r = 1, c = 4
matrixReshape([[1,2],[3,4]], 1 , 4); // expect [[1,2,3,4]];

// nums = [[1,2],[3,4]], r = 2, c = 4
matrixReshape([[1,2],[3,4]], 2 , 4); // expect [[1,2,3,4]];