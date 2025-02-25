```tsx
const combinationSum4 = (nums, target) => {

    let dp = Array(target + 1).fill(0).map();
    dp[0] = 1;

    for(let i = 0; i <= target; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]];
            }
        }
        console.log([...dp]);
    }

    return dp[target];
};
// nums = [1, 2, 3] target = 4
```

| 容量    | 0    | 1   | 2  | 3  |  4  
|--------|--------|--------|--------|--------|--------|
|物品索引   |     |    |   |    |    | 
| 0        | 1   | 0  | 0 | 0  | 0  | 
| 1        | 1   | 1  | 0 | 0  | 0  | 
| 2        | 1   | 0  | 2 | 0  | 0  | 
| 3        | 1   | 0  | 0 | 0  | 0  | 
| 4        | 1   | 0  | 0 | 0  | 0  | 
 
