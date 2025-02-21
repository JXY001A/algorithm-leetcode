export const coinChange = (coins:number[],amout:number):number=>{
    // 物品可无限取，所以为全背包问题
    // 组合数与数量无关，所以循环顺序为 先物品后容积
    // dp[i][j] 表示: 前 i 个物品组合中刚好填满容积为 j 的容器，中所用物品数量最少的个数
    // dp[i][j] = Math.min(dp[i-1][j],dp[i][j-coins[i]]+1);

    if(amout<0) {
        return 0;
    }
    // TODO: 求的是最小值所以初始化必须设置最大值，方面 min 函数判断
    const dp = new Array(coins.length+1).fill(0).map(()=>new Array(amout+1).fill(Infinity));
    for(let i=0;i<=coins.length;i+=1) {
        dp[i][0]=0;
    }

    for(let i=1;i<=coins.length;i+=1) {
        for(let j=1;j<=amout;j+=1) {
            if(j>=coins[i-1]) {
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-coins[i-1]]+1);
            }else {
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    
    return dp[coins.length][amout] === Infinity ? -1 : dp[coins.length][amout] ;
}