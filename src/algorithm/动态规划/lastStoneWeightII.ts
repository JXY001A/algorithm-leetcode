export function lastStoneWeightII(stones:number[]):number {
  const sum = stones.reduce((acc,next)=>acc+next,0);
  const capacity = Math.floor(sum/2);

  const dp = new Array(capacity+1).fill(0);
  for(let i=0;i<stones.length;i+=1) {
    for(let j=capacity;j>=stones[i];j-=1) {
      dp[j] = Math.max(dp[j],dp[j-stones[i]]+stones[i]);
    }
  }

  return sum - 2 * dp[capacity];
};
