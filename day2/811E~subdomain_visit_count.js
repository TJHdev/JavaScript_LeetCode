/*
A website domain like "discuss.leetcode.com" consists of various subdomains. 
At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, 
"discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", 
we will also visit the parent domains "leetcode.com" and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), 
followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. 
We would like a list of count-paired domains, (in the same format as the input, and in any order), 
that explicitly counts the number of visits to each subdomain.
*/


// debugger;
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */

var subdomainVisits = function(cpdomains) {
  let hashTotals = {};
  cpdomains.forEach(website => {
    let arr = website.split(' ');
    while(true) {
      if(!hashTotals[arr[1]]) {
        hashTotals[arr[1]] = Number(arr[0]);
      } else {
        hashTotals[arr[1]] += Number(arr[0]);
      }
      let index = arr[1].indexOf('.');
      if(index === -1) {
        break;
      } else {
        index += 1
      }
      arr[1] = arr[1].substring(index, arr[1].length);
    }
  })
  let result = Object.entries(hashTotals);
  result = result.map(array => {
    return array[1] + " " + array[0];
  })
  return result;
};


subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]); 
// ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
subdomainVisits(["9001 discuss.leetcode.com"]); // ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]