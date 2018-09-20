/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.


Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"

*/

var toLowerCase = function(str) {
    let result = [];
    let charCode;

    for(let i = 0; i < str.length; i++) {
      charCode = str.charCodeAt(i);
      if(charCode < 91 && charCode > 64) {
        charCode += 32;
      }
      result[i] = String.fromCharCode(charCode)
    }
    return result.join('');
};


toLowerCase("LOVELY"); // expect "lovely"
toLowerCase("Hello"); // expect "hello"
toLowerCase("here"); // expect "here"