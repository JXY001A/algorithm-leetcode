type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!root) return null; 

    if(root.val === p?.val || root.val === q?.val) {
        return root;
    }
    const leftAncestor = lowestCommonAncestor(root.left,p,q);
    const rightAncestor = lowestCommonAncestor(root.right,p,q);

    if(leftAncestor && rightAncestor) {
        return root;
    }
    return leftAncestor || rightAncestor;
};