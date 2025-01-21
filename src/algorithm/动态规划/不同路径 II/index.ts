export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n =  obstacleGrid[0]?.length;

  const dp = Array(m).fill(1).map(()=>Array(n).fill(0));

  for(let i=0;i<m && obstacleGrid[i][0] !== 1;i+=1) {
    dp[i][0] = 1;
  }

  for(let j=0;j<n && obstacleGrid[0][j] != 1;j+=1) {
    dp[0][j] = 1;
  }


  for(let i=1;i<m;i+=1) {
    for(let j=1;j<n;j+=1) {
      if(obstacleGrid[i][j] ===1) continue;
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m-1][n-1];
};

export function uniquePathsWithObstaclesOptimize(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n =  obstacleGrid[0]?.length;

  const dp = Array(n).fill(0);

  for(let i=0;i<n;i+=1) {
    if(obstacleGrid[0][i] === 1) {
      dp[i] = 0;
    }else if(i===0) {
      dp[i] = 1;
    }else {
      dp[i] = dp[i-1];
    }
  }
  

  for(let i=1;i<m;i+=1) {
    for(let j=0;j<n;j+=1) {
      if(obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      }else if(j>0){
        dp[j] += dp[j-1];
      }
    }
  }
  return dp[n-1];
};