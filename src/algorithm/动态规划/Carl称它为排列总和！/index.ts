// 全背包问题
//TODO: 如果求组合数就是外层for循环遍历物品，内层for遍历背包。
//TODO: 如果求排列数就是外层for遍历背包，内层for循环遍历物品。
export function combinationSum4(nums: number[], target: number):number {
	const dp = new Array(target+1).fill(0).map(()=>new Array(target+1).fill(0));
	for(let i=0;i<=target;i+=1) {
		dp[i][0] = 1;
	}

	for(let i=1;i<=target;i+=1) {
		for(let t=0;t<i;t+=1) {
			dp[i][t] = dp[i-1][t]; 
		}
		for(let j=1;j<=nums.length;j+=1) {
			if(i>=nums[j-1]) {
				dp[i][i] += dp[i][i-nums[j-1]]; 
			}
		}
	}
	return dp[target][target];
} 