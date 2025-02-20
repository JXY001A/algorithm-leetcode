```tsx
function change (amount,coins){
  const dp = new Array(coins.length+1).fill(0).map(()=> new Array(amount+1).fill(0));
  for(let i=0;i<=coins.length;i+=1) {
    dp[i][0] = 1;
  }
  
  for(let i = 1; i <= coins.length; i++) { // 遍历物品
    for(let j = 1; j <= amount ; j++) { // 遍历背包容量
      if(coins[i-1]<=j) {
        // dp[i][j - coins[i-1]] ：表示容量为 j 时放入物品 coins[i-1] 有多少种可能性
        // dp[i-1][j] ：表示容量为 j 时不放入物品 coins[i-1] 有多少种可能性
        dp[i][j] = dp[i][j - coins[i-1]] + dp[i-1][j];
      }else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }
  return dp;
}
// amount = 5, coins = [1, 2, 5]
```

| 容量    | 0    | 1   | 2  | 3  |  4  | 5 |
|--------|--------|--------|--------|--------|--------|--------|
|物品索引   |     |    |   |    |    |    |  
| 0        | 1   | 0  | 0 | 0  | 0  | 0  | 
| 1(1)     | 1   | 1  | 1 | 1  | 1  | 1  | 
| 2(2)     | 1   | 1  | 2 | 2  | 3  | 3  | 
| 3(5)     | 1   | 1  | 2 | 2  | 3  | 4  | 
