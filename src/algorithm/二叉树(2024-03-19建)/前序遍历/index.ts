type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};
export const preOrderTraversal = (root:Node) =>{
    const result:number[] = [];
    preOrderTraversalRecursive(root,result);
    return result;
}

const preOrderTraversalRecursive = (node:Node|null,result:number[])=>{
    if(!node) return ;
    result.push(node.val);
    preOrderTraversalRecursive(node.left,result);
    preOrderTraversalRecursive(node.right,result);
}