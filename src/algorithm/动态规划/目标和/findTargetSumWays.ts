export function findTargetSumWays(nums: number[], target: number):number {
  // 思路：
  // 总的来讲就是需要将 nums 数组中的数值分成两组，然后相加；第一组的和减去第二组的和等于目标 target;
  // 设第一组和为 leftSum；第二组和为 rightSum; 设总和为：sum;
  // leftSum - rightSum  = target
  // leftSum + rightSum = sum
  // 两式相加有： 2 * leftSum = target + sum;
  // leftSum = (target+sum) / 2
  // 所以w问题变成了 nums 数组种有多少种组合相加等于 leftSum 
  // TODO: (target+sum) / 2 ，注意 target+sum 一定要为偶数否则误解
  const sum = nums.reduce((acc,next)=>acc+next,0);
  // 不存在
  if((target+sum)%2 !==0) return 0;
  const capacity = (target+sum) / 2;
  // 容量小于 0，则不存在
  if(capacity<=0) return 0;

  
  
  const dp:number[] = new Array(capacity + 1).fill(0);
  dp[0] = 1;
  // dp[j] += dp[j-nums[i]]
  for(let i=0;i<nums.length;i+=1) {
    for(let j=capacity;j>=nums[i];j-=1) {
      dp[j] += dp[j-nums[i]];
    }
  }
  
  return dp[capacity];
}
