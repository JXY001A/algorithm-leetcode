export function uniquePaths(m: number, n: number): number {
  if(m === 1 || n ===1 ) return 1;

  const dp = Array(m).fill(0).map(()=>Array(n).fill(0));
  for(let i=1;i<m;i+=1) {
    dp[i][0] = 1;
  }

  for(let j=1;j<n;j+=1) {
    dp[0][j] = 1;
  }

  for(let i=1;i<m;i+=1){
    for(let j=1;j<n;j+=1) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m-1][n-1];
};


export function uniquePathsOptimize(m: number, n: number): number {
  if(m ===1 || n ===1) return 1;

  const dp = Array(n).fill(1);
  for(let j=1;j<m;j+=1) {
    for(let i=1;i<n;i+=1) {
      // 每一个到达的方块都是从左边或者上边两种可能性
      // dp[i] 本身代表了从上边下拉的可能性
      // dp[i-1] 此时代表的是到 i-1 这个方块的可能性，也就是 i 左侧可能路径数
      // TODO: 如果无法理解：请代入案例思考 
      dp[i]+=dp[i-1];
    }
  }
  return dp[n-1];
}