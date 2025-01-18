export function trap(height: number[]): number {
  let sum = 0;
  if(height.length<2) return sum;
  
  const stack:number[] = [0];

  for(let i=1;i<height.length;i+=1) {
    if(height[i]<height[stack[stack.length-1]]) {
      stack.push(i);
    }else if(height[i] === height[stack[stack.length-1]]) {
      // 已右侧为主，计算宽度
      stack.pop();
      stack.push(i);
    }else {
      while(stack.length>0 && height[i]>height[stack[stack.length-1]]) {
        const mid:number = stack.pop()!;
        if(stack.length>0) {
          const h = Math.min(height[i],height[stack[stack.length-1]]) - height[mid];
          const w = i - stack[stack.length-1] - 1;
          sum += h * w;
        }
      }
      stack.push(i);
    }
  }
  return sum;
}