export function permute(nums: number[]): number[][] {
    const result:number[][] = [];

    permuteRecursive(nums,[],result);

    return result;
};

const permuteRecursive = (nums:number[],path:number[],result:number[][])=>{
    if(path.length === nums.length) {
        result.push([...path]);
        return;
    }

    for(let i=0;i<nums.length;i+=1) {
        if(path.includes(nums[i])) {
            continue;
        }

        path.push(nums[i]);
        permuteRecursive(nums,path,result);
        path.pop();
    }
}