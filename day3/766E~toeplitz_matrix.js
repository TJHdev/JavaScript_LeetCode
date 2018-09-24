/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
*/

var isToeplitzMatrix = function(matrix) {
  let width = matrix[0].length; // 4
  let height = matrix.length; // 3

  for(let i = 0; i < width - 1; i++) {
    for(let j = 0; j < height - 1; j++) {
      if(matrix[j][i] !== matrix[j + 1][i + 1]) {
        return false;
      }
    }
  }
  return true
};



let matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
];

isToeplitzMatrix(matrix); // expect true


matrix2 = [
  [1,2],
  [2,2]
]

isToeplitzMatrix(matrix2); // expect false