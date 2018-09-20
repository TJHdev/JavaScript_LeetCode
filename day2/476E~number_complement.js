/*
Given a positive integer, output its complement number. 
The complement strategy is to flip the bits of its binary representation.
*/

/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {
  num = num.toString(2);
  let total = 0;
  for(let i = 0; i < num.length; i++) {
    if(num[i] === '0') ++total;
  }
  return total;
};

findComplement(5); // expect 2
findComplement(1); // expect 0