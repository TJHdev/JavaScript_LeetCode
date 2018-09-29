// Given a column title as appear in an Excel sheet, return its corresponding column number.


var titleToNumber = function(s) {
  let result = 0;
  let length = s.length
  for(let i = 0; i < length; i++) {
    result += (s.charCodeAt(i) - 64) * 26 ** (length - i - 1);
  }
  return result;
};

titleToNumber("A"); // expect 1
titleToNumber("AAA"); // expect 703
titleToNumber("AB"); // expect 28
titleToNumber("ZY"); // expect 701