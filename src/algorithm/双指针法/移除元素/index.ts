export function removeElement(nums: number[], val: number): number {
    let slow = 0;
    for(let fast=0;fast<nums.length;fast+=1) {
        if(nums[fast] !== val) {
            nums[slow++] = nums[fast];
        }
    }
    return slow;
};