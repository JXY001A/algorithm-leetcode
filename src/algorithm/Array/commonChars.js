/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  const A_CODE  =  'a'.charCodeAt();
  const CAPACITY = 26;


  const firstCount = Array(CAPACITY).fill(0);

  for(let i=0;i<words[0].length;i+=1) {
    firstCount[words[0][i].charCodeAt()-A_CODE] +=1;
  }

  const othersCount = Array(CAPACITY).fill(0);

  for(let i=1;i<words.length;i+=1) {
    const currentWord = words[i];
    for(let j=0;j<currentWord.length;j+=1) {
      othersCount[currentWord[j].charCodeAt()-A_CODE] +=1;
    }

    for(let k=0;k<CAPACITY;k+=1) {
      firstCount[k] = Math.min(firstCount[k],othersCount[k]);
    }

    othersCount.fill(0);
  }

  const result = [];
  
  for(let i=0;i<firstCount.length;i+=1) {
    while(firstCount[i]>0) {
      result.push(String.fromCharCode(i+A_CODE));
      firstCount[i]-=1;
    }
  }

  return result;
};