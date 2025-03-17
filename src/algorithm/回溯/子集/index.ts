export function subsets(nums: number[]): number[][] {
   const result:number[][] = [[]];
   subsetsRecursive(0,nums,[],result);
   return result;
};

const subsetsRecursive = (start:number,nums:number[],path:number[],result:number[][])=>{
   if(start>=nums.length) {
      return;
   }

   for(let i=start;i<nums.length;i+=1) {
      path.push(nums[i]);
      result.push([...path]);
      subsetsRecursive(i+1,nums,path,result);
      path.pop();
   }
}