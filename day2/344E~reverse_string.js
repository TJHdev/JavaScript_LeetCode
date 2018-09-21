// Write a function that takes a string as input and returns the string reversed.

var reverseString = function(s) {
  let result = '';
  for(let i = s.length - 1; i >= 0; i--){
    result += s[i];
  }
  return result;
};

reverseString('hello'); // expect 'olleh'