type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function getMinimumDifference(root: TreeNode | null): number {
    let minDiff=Number.MAX_SAFE_INTEGER;
    let preVal;
    const minimumDifference = (node:TreeNode|null)=>{
        if(!node) return;
        minimumDifference(node.left);
        if(typeof preVal === "number") {
            minDiff = Math.min(minDiff,node.val - preVal);    
        }
        preVal=node.val;
        minimumDifference(node.right);
    }
    minimumDifference(root);
    return minDiff;
};