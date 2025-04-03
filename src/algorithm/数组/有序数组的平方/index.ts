export function sortedSquares(nums: number[]): number[] {
    const result:number[] = []
    for(let i=0,j=nums.length-1;i<=j;) {
        if(nums[i]*nums[i] > nums[j]*nums[j]) {
            result.unshift(nums[i]*nums[i]);
            i+=1;
        }else {
            result.unshift(nums[j]*nums[j]);
            j-=1;
        }
    }
    return result;
};