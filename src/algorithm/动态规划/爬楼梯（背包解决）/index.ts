export const climbStairs = (n:number):number=>{
    // 每一步可以爬的阶楼梯数 stairs ，问：爬到第n阶楼梯有多少种方法？
    const stairs:number[] = [1,2,3];
  
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
  
    for(let i=0;i<=n;i+=1) {
      for(let j=0;j<stairs.length;j+=1)  {
        if(i>=stairs[j]) {
          dp[i]+=dp[i-stairs[j]];
        }
      }
    }
  
    return dp[n];
  }