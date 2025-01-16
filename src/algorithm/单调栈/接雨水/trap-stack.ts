export function trap(height: number[]): number {
  let sum = 0;
  if(height.length<2) return sum;
  
  const stack:number[] = [0];

  for(let i=1;i<height.length;i+=1) {
    if(height[i]>height[stack[stack.length-1]]) {
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

export function trapOfficial(height: number[]): number {
  const length: number = height.length;
  const stack: number[] = [];
  stack.push(0);
  let resVal: number = 0;
  for (let i = 1; i < length; i++) {
      let top = stack[stack.length - 1];
      if (height[top] > height[i]) {
          stack.push(i);
      } else if (height[top] === height[i]) {
          stack.pop();
          stack.push(i);
      } else {
          while (stack.length > 0 && height[top] < height[i]) {
              let mid = stack.pop();
              if (stack.length > 0) {
                  let left = stack[stack.length - 1];
                  let h = Math.min(height[left], height[i]) - height[mid];
                  let w = i - left - 1;
                  resVal += h * w;
                  top = stack[stack.length - 1];
              }
          }
          stack.push(i);
      }
  }
  return resVal;
};