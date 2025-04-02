export  function threeSum(nums: number[]): number[][] {
    const result:number[][] = [];
    const numsSorted = nums.sort((a,b)=>a-b);
    for(let i=0;i<numsSorted.length;i+=1) {
        if(i>0 && numsSorted[i] === numsSorted[i-1]) continue;
        let left = i+1;
        let right = numsSorted.length-1;
        while(left < right) {
            const sum = numsSorted[i] + numsSorted[left] + numsSorted[right];
            if(sum>0) {
                right-=1;
            }else if(sum<0) {
                left+=1;
            }else {
                result.push([numsSorted[i] ,numsSorted[left] ,numsSorted[right]]);
                while(left < right && numsSorted[left] === numsSorted[left+1]) left+=1;
                while(left < right && numsSorted[right] === numsSorted[right-1]) right-=1;
                left+=1;
                right-=1;
            }
        }
    }
    return result;
};