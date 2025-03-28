export function removeElement(nums: number[], val: number): number {
    let slowIndex = 0;
    for(let fastIndex=0;fastIndex<nums.length;fastIndex+=1) {
        if(nums[fastIndex] !== val) {
            nums[slowIndex++] = nums[fastIndex];
        }
    }
    return slowIndex;
};