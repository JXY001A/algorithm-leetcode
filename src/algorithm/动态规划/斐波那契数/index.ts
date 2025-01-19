export function fibRecursion(n: number): number {
  if(n===0) return 0;
  if(n===1) return 1;
  return fibRecursion(n-1) + fibRecursion(n-2);
};

export function fibDp(n: number): number {
  const dp = [0,1];
  
  for(let i=2;i<=n;i+=1) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[n];
};

export function fibDpOptimize(n: number): number {
  if(n<2) return n;
  const dp = [0,1];
  let sum = 0;
  for(let i=2;i<=n;i+=1) {
    sum = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = sum;
  }

  return sum;
};