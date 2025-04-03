export function minSubArrayLen(target: number, nums: number[]): number {
    let minLen = Number.MAX_SAFE_INTEGER;

    const minSubArrayLenRecursive = (start:number,curr:number,nums:number[],sum:number)=>{
        if(curr>=nums.length) return;
        if(sum>=target) {
            minLen = Math.min(minLen,(curr-start+1));
        }else {
            minSubArrayLenRecursive(start,curr+1,nums,sum+nums[curr]);
        }
        minSubArrayLenRecursive(curr+1,curr+1,nums,nums[curr+1]);
    }

    minSubArrayLenRecursive(0,0,nums,nums[0]);
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

