type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function convertBST(root: TreeNode | null): TreeNode | null {
    let sum = 0;
    const convertBSTRecursive = (node:TreeNode|null)=>{
        if(!node) return null;
        convertBSTRecursive(node.right);
        sum += node.val;
        node.val = sum;
        convertBSTRecursive(node.left);
    }
    convertBSTRecursive(root);
    return root;
};