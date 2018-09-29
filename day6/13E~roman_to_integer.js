/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

var romanToInt = function(s) {
  hash = {
    "I": 1,
    "IV": 4,
    "V": 5,
    "IX": 9,
    "X": 10,
    "XL": 40,
    "L": 50,
    "XC": 90,
    "C": 100,
    "CD": 400,
    "D": 500,
    "CM": 900,
    "M": 1000
  }
  let index = 0;
  let result = 0;
  let checkString;
  while(index < s.length) {
    checkString = s.substring(index, index + 2);
    if(hash[checkString]) {
      result += hash[checkString]
      index += 2;
    } else {
      result += hash[checkString.charAt(0)]
      index ++;
    }
  }
  return result;
};

romanToInt("III"); // expect 3
romanToInt("IV"); // expect 4
romanToInt("IX"); // expect 9
romanToInt("LVIII"); // expect 58
romanToInt("MCMXCIV"); // expect 1994
// explanation: M=1000, CM = 900, XC = 90, IV = 4



// Leetcode implementation
const toDecimal = {
  'I':1,
  'V':5,
  'X':10,
  'L':50,
  'C':100,
  'D':500,
  'M':1000
}

var romanToInt = function(s) {
  let prevDec = -1;
  let sum = 0;
  for (let i = s.length-1; i >= 0; --i) {
      let currDec = toDecimal[s.charAt(i)];
      if (prevDec > currDec) {
          sum -= currDec;
      } else {
          sum += currDec;
      }
      prevDec = currDec;
  }
  return sum;
};