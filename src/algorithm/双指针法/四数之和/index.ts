export  function fourSum(nums: number[], target: number): number[][] {
    const result:number[][] = [];
    const sortedNums = nums.sort((a,b)=>a-b);
    
    for(let i=0;i<sortedNums.length;i+=1) {
        if(sortedNums[i]>target && sortedNums[i]>=0) return result;
        if(i>0 && sortedNums[i] === sortedNums[i-1]) {
            continue;
        }

        for(let j=i+1;j<sortedNums.length;j+=1) {
            if(sortedNums[i] + sortedNums[j]>target && sortedNums[i] + sortedNums[j]>=0) {
                break;
            }
            if(j>i+1 && sortedNums[j] === sortedNums[j-1]) {
                continue;
            }

            let left = j+1;
            let right = sortedNums.length-1;
            while(left<right) {
                const forNumSum = sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];
                if(forNumSum>target) {
                    right-=1;
                }else if(forNumSum<target) {
                    left+=1;
                }else {
                    result.push([sortedNums[i] , sortedNums[j] , sortedNums[left] , sortedNums[right]]);
                    while(left<right && sortedNums[left] === sortedNums[left+1]) left+=1;
                    while(left<right && sortedNums[right] === sortedNums[right+1]) right-=1;
                    
                    left+=1;
                    right-=1;
                }
            }
        }
    }
    return result;    
};