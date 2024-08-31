/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
    const charCountMap = {};

    for(let char of s) {
      if(charCountMap[char]) {
        charCountMap[char]+=1;
      }else {
        charCountMap[char]=1;
      }
    }

    for(let char of t) {
      if(charCountMap[char]) {
        charCountMap[char]-=1;
      }else {
        charCountMap[char]=1;
      }
    }

    let count = 0;
    for(let key in charCountMap) {
      count+=charCountMap[key];
    }
    
    return count === 0;

};