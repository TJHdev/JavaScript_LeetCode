/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
*/

var addDigits = function(num) {
  let stringNum = num + '';
  num = 0;
  for(let i = 0; i < stringNum.length; i++) {
    num += Number(stringNum[i]);
  }

  if((num + '').length > 1) {
    return addDigits(num);
  } 
  return num
};

addDigits(38); // 2