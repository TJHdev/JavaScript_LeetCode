/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
*/

var selfDividingNumbers = function(left, right) {
  let result = [];
  for(let i = left; i <= right; i++) {
    let arrNum = i.toString()
    let divisible = true;
    for(let num of arrNum) {
      if(i % num != 0) {
        divisible = false;
        break;
      }
    }
    if(divisible) {
      result.push(i);
    }
  }
  return result;
};


selfDividingNumbers(1, 22); // expect [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]