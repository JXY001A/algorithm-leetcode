type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};
export const postOrderTraversal = (root:Node) =>{
    const result:number[] = [];
    postOrderTraversalRecursive(root,result);
    return result;
}

const postOrderTraversalRecursive = (node:Node|null,result:number[])=>{
    if(!node) return ;
    postOrderTraversalRecursive(node.left,result);
    postOrderTraversalRecursive(node.right,result);
    result.push(node.val);
}