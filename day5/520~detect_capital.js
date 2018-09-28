/*
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
*/


var detectCapitalUse = function(word) {
  let allCapitals = caseChecker(word, true);
  let allLowerCase = caseChecker(word, false);
  let firstLetterCaps = caseChecker(word.substring(0,1), true)
  let otherThanFirstLowerCase = caseChecker(word.substring(1), false);
  let onlyFirstLetterCaps = firstLetterCaps && otherThanFirstLowerCase;

  function caseChecker(partialString, uppercase) {
    let passed = true;
    if(uppercase) {
      for(let i = 0; i < partialString.length; i++) {
        let charCode = partialString.charCodeAt(i);
        if(charCode < 65 || charCode > 90) {
          passed = false;
          break;
        }
      }
    } else {
      for (let i = 0; i < partialString.length; i++) {
        let charCode = partialString.charCodeAt(i);
        if(charCode < 97 || charCode > 122) {
          passed = false;
          break;
        }
      }
    }
    return passed;
  }

  if(allCapitals || allLowerCase || onlyFirstLetterCaps) {
    return true
  }
  return false;
};


// amazing leetcode implementation
var detectCapitalUse = function(word) {
  if (word == word.toUpperCase()) return true;
  if (word == word.toLowerCase()) return true;
  
  for (var i = 1; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) return false;
  }
  
  return true;
};


detectCapitalUse("USA"); // return true;
detectCapitalUse("FlaG"); // return false;