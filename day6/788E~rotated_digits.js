/*
X is a good number if after rotating each digit individually by 180 degrees, 
we get a valid number that is different from X.  Each digit must be rotated
 - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, 
and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, 
and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?
*/

var rotatedDigits = function(N) {
  let hashInvalid = {
    "3":true,
    "4":true,
    "7":true
  }

  let hashFlipable = {
    "2":true,
    "5":true,
    "6":true,
    "9":true
  }
  let result = 0;
  for(let i = 0; i <= N; i++) {
    let num = i.toString().split('');
    let valid = true;
    let containsFlippabe = false;

    for(let j = 0; j < num.length; j++) {
      if(hashInvalid[num[j]] === true) {
        valid = false;
      }
      if(hashFlipable[num[j]] === true) {
        containsFlippabe = true;
      }
    }

    if(valid && containsFlippabe) {
     result++;
    }
    
  }
  return result;
};

rotatedDigits(20); // expect 4