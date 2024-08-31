/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const matrix = Array(n).fill(null).map(()=>Array(n));
  let loop = n>>1;
  const middle = n>>1;
  
  let startX =0;
  let startY =0;

  let offset =1;

  let count = 1;
  while(loop>0) {

    let i = startX;
    let j = startY;
    for(;i<n-offset;i+=1) {
      matrix[j][i] = count++; 
    }

    for(;j<n-offset;j+=1) {
      matrix[j][i] = count++;
    }

    for(;i>startX;i-=1) {
      matrix[j][i] = count++;
    }

    for(;j>startY;j-=1) {
      matrix[j][i] = count++;
    }

    startX+=1;
    startY+=1;

    offset +=1;
    loop-=1;
  }

  if(n%2!==0) {
    matrix[middle][middle] = count;
  }

  return matrix;
};