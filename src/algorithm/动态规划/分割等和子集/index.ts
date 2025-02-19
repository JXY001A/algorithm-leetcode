export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  // 两数之和不可能为奇数
  if(sum % 2 !== 0) return false;
  
  const capacity = sum / 2;
  

  const dp = new Array(nums.length+1).fill(0).map(()=> new Array(capacity+1).fill(0));
  for(let i=1;i<=nums.length;i+=1) {
    for(let j=capacity;j>=1;j-=1) {
      if(j>=nums[i-1]) {
        dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-nums[i-1]] + nums[i-1]);
      }else {
        dp[i][j] = dp[i-1][j];
      }
    }
  }
  
  return dp[nums.length][capacity] === capacity;
};
