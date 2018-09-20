/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.
*/
// new Array(20000)
var transpose = function(A) {
  let result = [];
  let height = A.length;
  let width = A[0].length
  for(let i = 0; i < A[0].length; i++) {
    let subArray = [];
    for(let j = 0; j < A.length; j++) {
      subArray.push(A[j][i]);
    }
    result.push(subArray);
  }
  return result;
};

transpose([[1,2,3],[4,5,6]]); // expect [[1,4],[2,5],[3,6]]
transpose([[1,2,3],[4,5,6],[7,8,9]]); // expect [[1,4,7],[2,5,8],[3,6,9]]