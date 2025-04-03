export function removeElement(nums: number[], val: number): number {
    let slow = 0;
    let fast = 0;
    for(;fast<nums.length;fast+=1) {
        if(nums[fast] !== val) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
};