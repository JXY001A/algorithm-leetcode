export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  // 两数之和不可能为奇数
  if(sum % 2 !== 0) return false;
  
  const capacity = sum / 2;
  

  const dp = new Array(nums.length+1).fill(0).map(()=> new Array(capacity+1).fill(0));
  for(let i=1;i<=nums.length;i+=1) {
    console.log('i',i)
    for(let j=capacity;j>=nums[i-1];j-=1) {
      dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-nums[i-1]] + nums[i-1]);
    }
  }
  
  return dp[nums.length][capacity] === capacity;
};