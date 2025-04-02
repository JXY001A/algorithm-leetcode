export function fourSum(nums: number[], target: number): number[][] {
    const result:number[][] = [];
    const numsSorted = nums.sort((a,b)=>a-b);
    for(let i=0;i<numsSorted.length;i+=1) {
        if(i>0 && numsSorted[i] === numsSorted[i-1]) continue;

        for(let j=i+1;j<numsSorted.length;j+=1) {
            if(j>i+1 && numsSorted[j]===numsSorted[j-1]) continue;
            if(numsSorted[j]+numsSorted[i]>0 && numsSorted[j]+numsSorted[i]>target) {
                break;
            }

            let left = j+1;
            let right = numsSorted.length-1;
            while(left < right) {
                const sum = numsSorted[i] + numsSorted[j] + numsSorted[left] + numsSorted[right];
                if(sum>target) {
                    right-=1;
                }else if(sum<target) {
                    left+=1;
                }else {
                    result.push([numsSorted[i] , numsSorted[j] , numsSorted[left] , numsSorted[right]]);
                    while(left < right && numsSorted[left]===numsSorted[left+1]) left+=1;
                    while(left < right && numsSorted[right]===numsSorted[right-1]) right-=1;
                    left+=1;
                    right-=1;
                }
            }

        }

    }
    return result;
};