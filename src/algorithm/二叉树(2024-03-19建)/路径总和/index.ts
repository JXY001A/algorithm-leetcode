
type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    
    if(!root) return false;
    if(!root.left && !root.right && targetSum - root.val=== 0) {
        return true;
    }

    
    const latestTargetSum = targetSum-root.val;

    const leftHasPathSum = hasPathSum(root.left,latestTargetSum);
    const rightHasPathSum= hasPathSum(root.right,latestTargetSum);
    
    return leftHasPathSum || rightHasPathSum;
};