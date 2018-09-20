/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.
*/


var hammingDistance = function(x, y) {
    x = x.toString(2);
    y = y.toString(2);
    let xlength = x.length
    let ylength = y.length
    let zeros = '';
    let difference = xlength - ylength;
    for(let i = 0; i < Math.abs(difference); i++) {
      zeros += '0';
    }
    if(difference > 0) {
      y = zeros + y
    } else {
      x = zeros + x
    }

    let count = 0;
    for(let i = 0; i < x.length; i++) {
      if(x[i] !== y[i]) {
        count++;
      }
    }
    return count;
};

var hammingDistance = function(x, y) {
  let val = x ^ y; // bitwise operator XOR returns 0100
  let distance;
  
  for (distance = 0; val > 0; distance++){
  val &= val-1;
  } // counts up how many differences there are.
  return distance;
};


hammingDistance(1,4); // expect 2;