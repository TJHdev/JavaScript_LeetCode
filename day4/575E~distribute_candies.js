/*
Given an integer array with even length, where different numbers in this array represent different kinds of candies. 
Each number means one candy of the corresponding kind. 
You need to distribute these candies equally in number to brother and sister. 
Return the maximum number of kinds of candies the sister could gain.
*/


var distributeCandies = function(candies) {
  let hashUniques = {};

  for(let i = 0; i < candies.length; i++){
    if(!hashUniques[candies[i]]) {
      hashUniques[candies[i]] = 1;
    } else {
      hashUniques[candies[i]]++;
    }
  }
  
  let maximum = candies.length / 2
  let possibleUniques = Object.keys(hashUniques).length;
  return possibleUniques > maximum ? maximum : possibleUniques;
};

// faster implementation using set
var distributeCandies = function(candies) {
  var res = new Set(),max=candies.length/2; // The Set object lets you store unique values of any type, whether primitive values or object references.
  for(let i=0;i<candies.length;i++){
      res.add(candies[i]);
  }
  return Math.min(res.size,max);
};

distributeCandies([1,1,2,2,3,3]); // expect 3
distributeCandies([1,1,2,3]); // expect 2