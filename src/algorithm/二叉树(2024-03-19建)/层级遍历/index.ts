type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function levelOrder(root: TreeNode | null): number[][] {
    const result:number[][] = [];
    const stack:( TreeNode | null)[] = [root];
    let currentLevelNodeCount = stack.length;
    while(stack.length>0) {
        const currentLevelNodeVals:number[] = [];
        while(currentLevelNodeCount>0) {
            const node = stack.shift()!;
            currentLevelNodeVals.push(node.val);
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
            currentLevelNodeCount-=1;
        }
        currentLevelNodeCount = stack.length;
        result.push(currentLevelNodeVals);
    }
    return result;
};