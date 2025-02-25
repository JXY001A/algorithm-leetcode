export function wordBreak(s: string, wordDict: string[]): boolean {
    // i: 表示容积为 i 
    // dp[i]: 表示容积为 i 的容器被放满的可能数量
    // dp[i] += dp[i-wordDict[j].length]; // 放入 wordDict[j] 和 不放入 wordDict[j] 两种可能性数量相加
    // dp[0] = 1;
    // wordDict 可以重复取，且和顺序有关系，所以为全背包排列问题,先循环容器

    if(s.length<=0 || wordDict.length<=0) {
        return false;
    }

    const dp = new Array(s.length+1).fill(0);
    dp[0] = 1;
    
    for(let i=1;i<=s.length;i+=1) {
        for(let j=0;j<wordDict.length;j+=1) {
            if(i >=wordDict[j].length && s.slice(i-wordDict[j].length,i) === wordDict[j]) {
                dp[i] += dp[i-wordDict[j].length]; 
            }
        }
    }

    return dp[s.length]>0;
};