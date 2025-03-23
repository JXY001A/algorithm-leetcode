export function permuteUnique(nums: number[]): number[][] {
    const result:number[][] = [];

    const numsSorted = nums.sort((a,b)=>a-b);
    permuteUniqueRecursive(numsSorted,[],[],result);

    return result;
};

const permuteUniqueRecursive = (nums:number[],path:number[],used:boolean[],result:number[][])=>{
    if(path.length === nums.length) {
        result.push([...path]);
        return;
    }

    for(let i=0;i<nums.length;i+=1) {
        // nums[i] 与 nums[i-1] 相同，但是 nums[i-1] 没有被使用，说明同层已经有排列用过了（可尝试运行理解） 
        if(i>=0 && nums[i] === nums[i-1] && used[i-1] === false) {
            continue;
        }

        if(!used[i]) {
            path.push(nums[i]);
            used[i] = true;
            permuteUniqueRecursive(nums,path,used,result);
            path.pop();
            used[i] = false;
        }
    }
}