/*
Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines ; 
otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.
*/

var canConstruct = function(ransomNote, magazine) {
  let hash = {}

  for(let i = 0; i < magazine.length; i++) {
    if(hash[magazine[i]] === undefined) {
      hash[magazine[i]] = 1;
    } else {
      hash[magazine[i]]++;
    }
  }

  for(let i = 0; i < ransomNote.length; i++) {
    if(hash[ransomNote[i]] > 0) {
      hash[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

canConstruct("a", "b"); // expect false
canConstruct("aa", "ab"); // expect false
canConstruct("aa", "aab"); // expect true