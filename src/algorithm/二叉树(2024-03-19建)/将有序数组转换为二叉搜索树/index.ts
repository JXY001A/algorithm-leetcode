type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};
export function sortedArrayToBST(nums: number[]): TreeNode | null {
    if(nums.length === 0) return null;
    let nodeValIndex =  Math.floor((nums.length-1)/2);
    return {
        val:nums[nodeValIndex],
        left:sortedArrayToBST(nums.slice(0,nodeValIndex)),
        right:sortedArrayToBST(nums.slice(nodeValIndex+1)),
    };
};