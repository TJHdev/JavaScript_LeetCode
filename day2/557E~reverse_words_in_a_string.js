/*
Given a string, you need to reverse the order of characters in each word 
within a sentence while still preserving whitespace and initial word order.
*/

var reverseWords = function(s) {
  s = s.split(" ");
  let reversedString = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s[i].length - 1; j >= 0; j--) {
      reversedString += s[i][j]
    }
    if(i < s.length - 1) {
      reversedString += ' ';
    }
  }
  return reversedString;
};


// fastest from LeetCode
var reverseWords = function(s) {
  const arr = s.split(' ');

  return arr.map( word => {
    let reversedWord = '';
    for(let i = word.length - 1; i >= 0; --i){
      reversedWord += word[i];
    }
    return reversedWord;
  }).join(' ');
};


reverseWords("Let's take LeetCode contest"); // expect "s'teL ekat edoCteeL tsetnoc"