export function integerBreak(n: number): number {
  if(n<2) return -1;  
  const dp = Array(n+1).fill(0);
  // n 最小应该是从 1 开始
  dp[2] = 1;

  for(let i=3;i<=n;i+=1) {
    //  j<i-1 保证了 i-j>=2，dp 数组初始化起点索引为 2
    for(let j=1;j<i-1;j+=1) {
      dp[i] = Math.max(j*(i-j),j*dp[i-j],dp[i]);
    }
  }
  return dp[n];
};