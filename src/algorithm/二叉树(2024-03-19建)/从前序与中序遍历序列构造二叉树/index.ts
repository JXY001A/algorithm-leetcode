type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

const createTreeNode = (val:number):TreeNode=>{
    return {
        val,
        left:null,
        right:null
    };
}
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(preorder.length ===0 || inorder.length ===0) {
        return null;
    }

    const val = preorder.shift()!;
    const valIndexOfInorder = inorder.indexOf(val);
    const node = createTreeNode(val);
    node.left = buildTree(preorder,inorder.slice(0,valIndexOfInorder));
    node.right = buildTree(preorder,inorder.slice(valIndexOfInorder+1));
    return node;
};