

var uniqueMorseRepresentations = function(words) {
  const transforms = {};

  const map = {
    "a":".-",
    "b":"-...",
    "c":"-.-.",
    "d":"-..",
    "e":".",
    "f":"..-.",
    "g":"--.",
    "h":"....",
    "i":"..",
    "j":".---",
    "k":"-.-",
    "l":".-..",
    "m":"--",
    "n":"-.",
    "o":"---",
    "p":".--.",
    "q":"--.-",
    "r":".-.",
    "s":"...",
    "t":"-",
    "u":"..-",
    "v":"...-",
    "w":".--",
    "x":"-..-",
    "y":"-.--",
    "z":"--.."
  }
  for(let i = 0; i < words.length; i++) {
    let morseWord = '';
    let word = words[i]
    for(let char of word) {
      morseWord += map[char]; // build the transform up char by char.
    }
    if(transforms[morseWord] === undefined) { // if there is currently no transform add it.
      transforms[morseWord] = 1;
    }
  }
  var count = 0;
  for (var k in transforms) if (transforms.hasOwnProperty(k)) ++count; // count the number of unique transforms and return.

  return count 
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]); // expect 2

/*
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
*/