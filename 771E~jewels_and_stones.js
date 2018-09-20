/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/


var numJewelsInStones = function(J, S) {
  let count = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        count++;
      }
    }
  }
  return count;
};


// Slight improvement as indexOf will stop as soon as it hits the correct value in the first string.

var numJewelsInStones = function(J, S) {
  var count = 0;
  for(var i = 0; i < S.length; i++){
      if(J.indexOf(S[i]) >= 0 ){
          count++;
      }        
  }
  
  return count;
};

// makes use of hash map to check against.

var numJewelsInStones = function(J, S) {
  let map = {};
  let res = 0;
  for(let i = 0; i < J.length; i ++){
      map[J[i]] = true;
  }
  for(let i = 0; i < S.length; i ++){
      if(map[S[i]] === true){
          res ++;
      }
  }
  return res;
};


numJewelsInStones("aA", "aAAbbbb"); // expect 3
numJewelsInStones("z", "ZZ"); // expect 0
