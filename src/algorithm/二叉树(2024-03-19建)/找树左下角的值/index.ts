type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};
export function findBottomLeftValue(root: TreeNode | null): number {
    let maxDepth = 0;
    let result = 0;
    const findBottomLeftValueRecursive = (node: TreeNode | null,depth:number)=>{
        if(!node) return;
        if(!node.left && !node.right) {
            if(maxDepth<depth) {
                result = node.val;
                maxDepth = depth;
            }
        }
        findBottomLeftValueRecursive(node.left,depth+1);
        findBottomLeftValueRecursive(node.right,depth+1);
    }

    findBottomLeftValueRecursive(root,1);
    return result
};

