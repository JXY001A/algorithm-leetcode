export function threeSum(nums: number[]): number[][] {
    const result:number[][] = [];
    if(nums.length<3) return result;
    const numsSorted = nums.sort((a,b)=>a-b);

    for(let i=0;i<numsSorted.length;i+=1) {
        // TODO: 最小值大于 0 说明不存在三数值和等于0的情况
        if(numsSorted[i]>0) return  result;

        // TODO: 去重
        if(i>0 && nums[i] === nums[i-1]) {
            continue;
        }

        let left = i+1;
        let right = numsSorted.length-1;

        while(left<right) {
            const threeSum = nums[i] + nums[left] + nums[right];

            if(threeSum>0) {
                right-=1;
            }else if(threeSum<0) {
                left+=1;
            }else {
                result.push([ nums[i] , nums[left] , nums[right]]);

                // TODO: 排除 left 和 right 指针重复
                while(left < right && nums[left] === nums[left+1]) left+=1;
                while(left < right && nums[right] === nums[right-1]) right-=1;
                
                left+=1;
                right-=1;
            }
        }
    }


    return result;
};