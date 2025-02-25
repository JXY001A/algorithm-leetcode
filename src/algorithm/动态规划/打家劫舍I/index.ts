export function rob(nums: number[]): number {
    // dp[i] ： 表示在第 i 个房间能获得的最大金额
    // 不能连续只能间隔偷，所以两种情况 偷 i 房间和不偷 i 房间
    // dp[i-1]： 不偷i房间； dp[i-2]+nums[i]： 偷 i 房间
    // dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i]); 
    // 不是背包问题直接循环
    // 初始化 dp[0] = 0;dp[1] = nums[0];
    // 循环从 i =2 开始；
    
    const dp = new Array(nums.length+1).fill(0);
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i=2;i<=nums.length;i+=1) {
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i-1]);
    }
    return dp[nums.length];
};