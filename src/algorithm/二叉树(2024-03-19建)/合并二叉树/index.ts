type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1 && !root2) return null;
    if(root1 && !root2) return root1;
    if(root2 && !root1) return root2;

    const mergeVal = root1?.val! + root2?.val!;
    root1!.val = mergeVal;
    root1!.left = mergeTrees(root1!.left,root2!.left);
    root1!.right = mergeTrees(root1!.right,root2!.right);

    return root1;
};