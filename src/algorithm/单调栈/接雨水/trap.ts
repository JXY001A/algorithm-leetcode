export function trap(height: number[]): number {
  let sum = 0;

  for(let i=0;i<height.length;i+=1) {
    if(i===0 || i===height.length) continue;
    let lHeight = height[i];
    let rHeight = height[i];

    for(let j=i-1;j>=0;j-=1) {
      lHeight = Math.max(lHeight,height[j]);
    }
    for(let k=i+1;k<height.length;k+=1) {
      rHeight = Math.max(rHeight,height[k]);
    }

    const h = Math.min(lHeight,rHeight) - height[i];

    if(h>0) {
      sum+=h;
    }
  }
  return sum;
};