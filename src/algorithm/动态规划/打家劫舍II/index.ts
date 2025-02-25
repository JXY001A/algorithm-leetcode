export function rob(nums: number[]): number {
    // 是否循环并无关系，本质上就是两种情况：
    // 1. 包含一个元素，不包含最后一个元素
    // 2. 包含最后一个元素，不包含第一个元素
    // 因为 第一个与最后一个收尾相连，要么只包含其中一个，要么都不包含
 
    return Math.max(robRange(nums,0,nums.length-2),robRange(nums,1,nums.length-1))
 };
 
 function robRange(nums: number[],start:number,end:number): number {
    const count = end-start+1;
    const dp = new Array(count+1).fill(0);
    dp[0] = 0;
    dp[1] = nums[start];
    for(let i=start+2;i<=count;i+=1) {
       // 注意起点是 start
       dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1-start])
    }
    return dp[count];
 };