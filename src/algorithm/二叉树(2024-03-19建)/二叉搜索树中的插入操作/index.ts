type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    const insertNode = {val,left:null,right:null};
    const insertBST = (node: TreeNode | null, val: number)=>{
        if(!node) return;
        if(node.val > val) {
            if(!node.left) {
                node.left = insertNode;
            }else {
                insertBST(node.left,val);
            }
        }else {
            if(!node.right) {
                node.right = insertNode;
            }else {
                insertBST(node.right,val);
            }
        }
    }
    insertBST(root,val);
    return !root ? insertNode : root;
};