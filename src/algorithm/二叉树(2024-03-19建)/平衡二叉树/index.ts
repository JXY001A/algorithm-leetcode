type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function isBalanced(root: TreeNode | null): boolean {
    if(!root) return true;
    return  getHeight(root) === -1 ? false : true;
};

const getHeight = (node:TreeNode|null)=>{
    if(!node) return 0;
    const leftHeight = getHeight(node.left);
    if(leftHeight === -1) {
        return -1;
    }

    const rightHeight = getHeight(node.right);
    if(rightHeight === -1) {
        return -1;
    }

    return Math.abs(leftHeight-rightHeight)>1? -1: Math.max(leftHeight,rightHeight)+1;
}