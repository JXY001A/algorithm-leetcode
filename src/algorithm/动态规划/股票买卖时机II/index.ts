export function maxProfit(prices: number[]): number {
    // 多次买卖收益最大，出售手中股票
    // 有股票时手中现金数，无股票时手中现金数
    // dp[i][0]: 表示第i天持有股票所得现金 （上一轮买入或 第i天买入 ）
    // dp[i][1]: 表示第i天不持有股票所得最多现金 (上一轮未买入 或者第 i 天卖出)
    // dp[i][0] = max(dp[i-1][0],dp[i-1][1]-price[i])
    // dp[i][1] = max(dp[i-1][1],dp[i-1][0]+price[i])
    // 初始化：dp[0][0]= -price[0];

    const dp = new Array(prices.length).fill(0).map(()=>new Array(2).fill(0));
    dp[0][0] = -prices[0]
    for(let i=1;i<prices.length;i+=1) {
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]-prices[i]);
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]+prices[i]);
    }
    return Math.max(...dp[prices.length-1]);
};