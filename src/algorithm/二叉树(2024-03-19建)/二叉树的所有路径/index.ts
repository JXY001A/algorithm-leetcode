type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function binaryTreePaths(root: TreeNode | null): string[] {
    const result:string[] = [];
    getBinaryTreePaths(root,[],result);
    return result;
};

const getBinaryTreePaths = (node: TreeNode | null,path:number[],result:string[])=>{
    if(!node) return;
    if(!node?.left && !node?.right) {
        path.push(node.val);
        result.push(path.join('->'));
        path.pop();
        return;
    }

    path.push(node.val)
    getBinaryTreePaths(node.left,path,result);
    getBinaryTreePaths(node.right,path,result);
    path.pop();
}
