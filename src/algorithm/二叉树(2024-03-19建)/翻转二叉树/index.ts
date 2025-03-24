
type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function invertTree(root: TreeNode | null): TreeNode | null {
    invertTreeRecursive(root);
    return root; 
};

const invertTreeRecursive = (node:TreeNode|null)=>{
    if(!node) return;
    invertTreeRecursive(node.left);
    invertTreeRecursive(node.right);
    const tempNode = node.left;
    node.left = node.right;
    node.right = tempNode;
}