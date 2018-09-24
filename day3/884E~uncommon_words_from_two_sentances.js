/*
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.
*/

var uncommonFromSentences = function(A, B) {
  let wordsHash = {};
  function pushToHash(string) {
    let arr = string.split(" ");
    arr.forEach(word => {
      if(!wordsHash[word]) {
        wordsHash[word] = 1;
      } else {
        wordsHash[word] += 1;
      }
    })
  }
  pushToHash(A);
  pushToHash(B);

  let result = [];
  Object.entries(wordsHash).forEach(arrWordCount => {
    if(arrWordCount[1] === 1) {
      result.push(arrWordCount[0])
    }
  })
  return result;
};

// improved section
var uncommonFromSentences = function(A, B) {
  let wordsHash = {};
  function pushToHash(string) {
    let arr = string.split(" ");
    arr.forEach(word => {
      if(!wordsHash[word]) {
        wordsHash[word] = 1;
      } else {
        wordsHash[word] += 1;
      }
    })
  }
  pushToHash(A);
  pushToHash(B);
  let result = [];
  for(let key in wordsHash) {
    if(wordsHash[key] === 1) {
      result.push(key);
    }
  }
  return result;
};

uncommonFromSentences("this apple is sweet", "this apple is sour"); // expect ["sweet","sour"]