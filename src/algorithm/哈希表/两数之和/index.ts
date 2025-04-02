export function twoSum(nums: number[], target: number): number[] {
    const numsTargetMap:Record<string,number> = {};
    for(let i=0;i<nums.length;i+=1) {
        if(typeof numsTargetMap[nums[i]] === 'number') {
            return [numsTargetMap[nums[i]],i];
        } else {
            numsTargetMap[target-nums[i]] = i;
        }
    }
    return [];
};