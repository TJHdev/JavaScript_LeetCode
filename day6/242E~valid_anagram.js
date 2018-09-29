// Given two strings s and t , write a function to determine if t is an anagram of s.

var isAnagram = function(s, t) {
  let slength = s.length;
  let tlength = t.length;
  if(slength !== tlength) return false;

  let hash = {};
  for(let i = 0; i < slength; i++) {
    if(hash[s[i]] === undefined) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]] ++;
    }
  }

  for(let i = 0; i < tlength; i++) {
    if(!Boolean(hash[t[i]])) {
      return false
    } else {
      hash[t[i]]--;
    }
  }
  return true;
};

isAnagram("anagram","nagaram"); // expect true
isAnagram("rat", "car"); // expect false