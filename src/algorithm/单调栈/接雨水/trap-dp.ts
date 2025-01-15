export function trap(height: number[]): number {
  let sum = 0;
  if(height.length < 2) return sum;
  const length = height.length;
  const leftMax  = Array(length).fill(0);
  const rightMax = Array(length).fill(0);

  leftMax[0] = height[0];
  for(let i = 1; i < length; i++) {
    leftMax[i] = Math.max(height[i],leftMax[i - 1] );
  }

  rightMax[length-1] = height[length-1];
  for(let j = length-2;j>=0;j-=1) {
    rightMax[j] = Math.max(height[j],rightMax[j+1]);
  }

  for(let k =0;k<length;k+=1) {
    const h = Math.min(leftMax[k],rightMax[k]) - height[k];

    if(h>0) {
      sum+=h;
    }
  }

  return sum;
}