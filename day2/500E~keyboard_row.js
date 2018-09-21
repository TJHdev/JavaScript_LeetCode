/*
Given a List of words, return the words that can be typed using 
letters of alphabet on only one row's of American keyboard like the image below.
*/

var findWords = function(words) {
  keyRowHash = {
    "q":"1",
    "w":"1",
    "e":"1",
    "r":"1",
    "t":"1",
    "y":"1",
    "u":"1",
    "i":"1",
    "o":"1",
    "p":"1",
    "a":"2",
    "s":"2",
    "d":"2",
    "f":"2",
    "g":"2",
    "h":"2",
    "j":"2",
    "k":"2",
    "l":"2",
    "z":"3",
    "x":"3",
    "c":"3",
    "v":"3",
    "b":"3",
    "n":"3",
    "m":"3"
  }
  words = words.filter(word => {
    let passed = true;
    for(let i = 0; i < word.length - 1; i++) {
      word = word.toLowerCase();
      if(keyRowHash[word[i]] !== keyRowHash[word[i + 1]]) {
        passed = false;
      }
    }
    return passed;
  });
  return words;
};


findWords(["Hello", "Alaska", "Dad", "Peace"]); // ["Alaska", "Dad"];

