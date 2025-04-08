// 主要思路：先使用单调栈将 nums2 中每个元素的右侧第一个大于元素本身的值找到，又由于不存在重复元素，于是使用
// map 来做映射，将子数组 nums1 中的目标值还原出来。
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ans:number[] = [];
  if(nums1.length<1 || nums2.length<1) return ans;

  let allAns:Record<string,number> = {};
  const stack:number[] = [0];
  for(let i=1;i<nums2.length;i+=1) {
    let stackTopIndex = stack.length-1; 
    while(stack.length>0 && nums2[stack[stackTopIndex]]<nums2[i]) {
      const stackTopValue = nums2[stack[stackTopIndex]];
      allAns[stackTopValue] = i;
      stack.pop();
      stackTopIndex-=1;
    }
    stack.push(i);
  }

  nums1.forEach((nItem)=>{
    if(allAns[nItem]!==undefined) {
      ans.push(nums2[allAns[nItem]]);
    }else {
      ans.push(-1);
    }
  });
  
  return ans;
};
