/*
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 
*/

var toGoatLatin = function(S) {
  vowelHash = {
    a:true,
    A:true,
    e:true,
    E:true,
    i:true,
    I:true,
    o:true,
    O:true,
    u:true,
    U:true
  }

  let Arr = S.split(" ");
  Arr = Arr.map((word, index) => {
    if(!vowelHash[word[0]]) {
      word = word.substring(1) + word.substring(0,1);
    }
    word = word + "ma"
    for(let i = 0; i < index + 1; i++){
      word += "a"
    }
    return word;
  });
  return Arr.join(" ");
};

toGoatLatin("I speak Goat Latin"); 
// expect "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
toGoatLatin("The quick brown fox jumped over the lazy dog"); 
// expect "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"