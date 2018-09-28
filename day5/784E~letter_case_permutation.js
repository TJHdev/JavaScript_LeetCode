/*
Given a string S, we can transform every letter individually 
to be lowercase or uppercase to create another string.  
Return a list of all possible strings we could create.
*/

var letterCasePermutation = function(S) {
  let set = new Set();

  set.add(S);

  function recursiveHelper(string, index) {
    if(index === string.length) return;
    let charCode = string.charCodeAt(index);
    if(charCode >= 97 && charCode <= 122) { // if lower case character
      let upperString = string.substring(0, index) + string[index].toUpperCase() + string.substring(index + 1);
      set.add(upperString);
      recursiveHelper(upperString, index + 1);
    } else if (charCode >= 65 && charCode <= 90) { // if upper case character
      let lowerString  = string.substring(0, index) + string[index].toLowerCase() + string.substring(index + 1);
      set.add(lowerString);
      recursiveHelper(lowerString, index + 1);
    }
    set.add(string);
    recursiveHelper(string, index + 1);
  }
  recursiveHelper(S,0);

  return Array.from(set);
};

letterCasePermutation("a1b2"); // expect ["a1b2", "a1B2", "A1b2", "A1B2"]