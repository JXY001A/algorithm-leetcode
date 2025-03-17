export function subsetsWithDup(nums: number[]): number[][] {
    const result:number[][] = [[]];
    const numsSorted = nums.sort((a,b)=>a-b);
    subsetsWithDupRecursive(0,numsSorted,[],result);
    return result;
};

const subsetsWithDupRecursive = (start:number,nums:number[],path:number[],result:number[][])=>{
    if(start>=nums.length) {
        return;
    }

    for(let i=start;i<nums.length;i+=1) {
        if(i!== start && nums[i]===nums[i-1]) continue;
        path.push(nums[i]);
        result.push([...path]);
        subsetsWithDupRecursive(i+1,nums,path,result);
        path.pop();
    }
}