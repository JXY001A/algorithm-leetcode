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
export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(inorder.length===0 || postorder.length ===0) {
        return null;
    }

    const val = postorder.pop()!;
    const valIndexOfInOrder = inorder.indexOf(val);
    const node = createTreeNode(val);
    node.right = buildTree(inorder.slice(valIndexOfInOrder+1),postorder);
    node.left = buildTree(inorder.slice(0,valIndexOfInOrder),postorder);
    return node;
};