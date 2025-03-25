type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function sumOfLeftLeaves(root: TreeNode | null): number {
    if(!root) return 0;
    let leftLeftSum = 0;
    if(root.left) {
        if(!root.left.left && !root.left.right) {
            leftLeftSum = root.left.val;
        }else {
            leftLeftSum = sumOfLeftLeaves(root.left);
        }
    }
    let rightLeftSum = 0;
    if(root.right) {
        rightLeftSum =  sumOfLeftLeaves(root.right);
    }

    return leftLeftSum + rightLeftSum;
};