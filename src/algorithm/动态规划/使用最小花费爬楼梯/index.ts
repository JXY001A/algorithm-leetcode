export function minCostClimbingStairs(cost: number[]): number {
    if(cost.length<2) return cost[0];
    
    let dp = [cost[0],cost[1]];
    for(let i=2;i<cost.length;i+=1) {
      dp[i] = Math.min(dp[i-1],dp[i-2]) + cost[i];
    }

    return  Math.min(dp[cost.length-1],dp[cost.length-2]);
};
