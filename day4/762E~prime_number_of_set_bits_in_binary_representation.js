/*
Given two integers L and R, find the count of numbers in the range [L, R] (inclusive) 
having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 1s present when written in binary. 
For example, 21 written in binary is 10101 which has 3 set bits. Also, 1 is not a prime.)
*/

var countPrimeSetBits = function(L, R) {
  let hashPrimes = {};
  let totalPrimes = 0;
  function isPrime(num) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        prime = false;
        break;
      }
    }
    return prime && (num > 1);
  }
  for(let i = L; i <= R; i++) {
    let bitNum = i.toString(2);
    let totalBitCount = 0;
    for(let j = 0; j < bitNum.length; j++) {
      if(bitNum[j] === "1") {
        totalBitCount++;
      }
    }
    if(hashPrimes[totalBitCount] === undefined) {
      let prime = isPrime(totalBitCount)
      hashPrimes[totalBitCount] = prime;
      if(prime) {
        totalPrimes++;
      }
    } else if (hashPrimes[totalBitCount] === true) {
      totalPrimes++;
    }
  }
  return totalPrimes;
};


// fast bitwise LeetCode

let isPrime = (val) => {
  for (let i = 2; i < val; ++i) 
      if (val%i === 0) return false
  return val > 1
}

let countPrimeSetBits = (L, R) => {
  let primeBits = 0
  for (let i = L; i <= R; ++i) {
      let cur = i
      let bitsSet = 0
      while (cur) {
          bitsSet += cur & 1
          cur >>= 1
      }
      if (isPrime(bitsSet)) ++primeBits
  }
  return primeBits
}


countPrimeSetBits(10, 15); // expect 5
countPrimeSetBits(6, 10); // expect 4