/*
  本质上本题目的循环其实就是一个数组首尾相接遍历两遍。任何一个元素在第二遍中都会遇到，所以
  遍历 2 遍就可以找到所有元素右侧最大的值（首位相接 [...num1,...num1]）。
*/ 
export  function nextGreaterElements(nums: number[]): number[] {
  const ans:number[] = Array(nums.length).fill(-1);
  if(nums.length<0) return ans;
  const stack:number[] = [];
  
  for(let i=0;i<nums.length*2;i+=1) {
    while(stack.length>0 && nums[stack[stack.length-1]]<nums[i%nums.length]) {
      const stackTop = stack.pop()!;
      ans[stackTop] = nums[i%nums.length];
    }
    stack.push(i%nums.length);
  }

  return ans;
};
