export function maxProfit(prices: number[]): number {
    // 最大收益的前提：最低买入，最高卖出
    // 按照时间顺序：最低在前，最高在后
    // minPrice: 表示 i 天之前最低的价格
    // maxProfit = Math.max(maxProfit,prices[i]-minPrice)
    // minPrice = Math.max(minPrice,prices[i]);
    // 初始化： maxProfit = 0；minPrice=prices[0];
    // 顺序遍历
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i=1;i<prices.length;i+=1) {
        maxProfit = Math.max(maxProfit,prices[i]-minPrice);
        minPrice = Math.min(minPrice,prices[i]);
    }
    return maxProfit;
};