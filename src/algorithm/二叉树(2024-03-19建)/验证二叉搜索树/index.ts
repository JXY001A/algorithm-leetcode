type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};
export function isValidBST(root: TreeNode | null): boolean {
    let prevVal = Number.MIN_SAFE_INTEGER;
    const validBST = (node:TreeNode|null)=>{
        if(!node) return true;
        const leftIsBST = validBST(node.left);
        if(prevVal>=node.val) {
            return false;
        }else {
            prevVal = node.val;
        }
        const rightIsBST = validBST(node.right);
        return leftIsBST && rightIsBST;
    }
    return validBST(root);
};