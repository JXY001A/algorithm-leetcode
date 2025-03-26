type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};


export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
	if(!root) return null;
    // if(root.val === p?.val || root.val === q?.val) {
    //     return root;
    // }
    
    if(root.val > p.val && root.val > q.val) {
        let leftAncestor = lowestCommonAncestor(root.left,p,q);
        if(leftAncestor) {
            return leftAncestor;
        }
    }
    if(root.val<p.val && root.val < q.val) {
        let rightAncestor = lowestCommonAncestor(root.right,p,q);
        if(rightAncestor) {
            return rightAncestor;
        }
    }

    return root;
};