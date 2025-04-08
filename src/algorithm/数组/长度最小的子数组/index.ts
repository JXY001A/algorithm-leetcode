export function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Number.MAX_SAFE_INTEGER;
    let sum=0;
    let i=0;
    for(let j=0;j<nums.length;j+=1) {
        sum+=nums[j];
        while(sum>=target) {
            minLen = Math.min(minLen,j-i+1);
            sum-=nums[i++];
        }
    }

    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

