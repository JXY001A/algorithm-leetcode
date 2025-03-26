type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};


export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root) return null;
    
    if(root.val === val) {
        return root;
    }else if(val < root.val) {
        return searchBST(root.left,val);
    }else {
        return searchBST(root.right,val);
    }
};