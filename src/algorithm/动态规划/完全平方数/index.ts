export const numSquares = (n:number)=>{
    if(n<=0) return 0;
    const stuff:number[] = [];
    for(let i=1;Math.pow(i,2)<=n;i+=1) {
        stuff.push(Math.pow(i,2));
    }
    // 1.物品数量不限所谓为全背包问题
    // 2.没有顺序限制，组合问题非排列问题，故优先遍历物品
    // 3. dp[j]: 刚好能填满容量为 j 的容器的组合数中元素数最少的组合的元素数
    // 4. dp[j] = min(dp[j],dp[j-stuff[i]]+1);  
    // 5. 由于要求找出元素最少的组合，所以初始化默认应该设置 Infinity,dp[0]=0

    const dp = new Array(n+1).fill(Infinity);
    dp[0] = 0;
    
    for(let i=0;i<stuff.length;i+=1) {
        for(let j=stuff[i];j<=n;j+=1) {
            dp[j] = Math.min(dp[j],dp[j-stuff[i]]+1);
        }
    }

    
    return dp[n] === Infinity ? -1 : dp[n];
}