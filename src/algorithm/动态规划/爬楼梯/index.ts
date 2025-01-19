export function climbStairs(n: number): number {
  if(n<2) return n;
  const dp = [1,1];
  for(let i=2;i<=n;i+=1) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
};

// TODO: 优化空间复杂度，始终使用到的是 dp[i-2],dp[i-1] 两个数值
export function climbStairsOptimize(n: number): number {
  if(n<2) return n;
  const dp = [1,1];
  let climbCount = 0;
  for(let i=2;i<=n;i+=1) {
    climbCount = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = climbCount;
  }

  return climbCount;
};