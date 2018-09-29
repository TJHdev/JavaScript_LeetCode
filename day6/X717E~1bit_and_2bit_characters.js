/*
We have two special characters. The first character can be represented by one bit 0. 
The second character can be represented by two bits (10 or 11).

Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. 
The given string will always end with a zero.
*/

var isOneBitCharacter = function(bits) {
  let length = bits.length;

  let oneCount = 0;
  for(let i = length - 1; i > 0; i--) {
    if(bits[i] === 1) {
      oneCount++;
    }
  }
  return oneCount % 2 === 0;
}

isOneBitCharacter([1,0,0]); // expect true
// The only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.

isOneBitCharacter([1,1,0,0]); // expect false
// The only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.