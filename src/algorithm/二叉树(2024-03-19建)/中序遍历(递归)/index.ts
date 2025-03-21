type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};
export const inOrderTraversal = (root:Node) =>{
    const result:number[] = [];
    inOrderTraversalRecursive(root,result);
    return result;
}

const inOrderTraversalRecursive = (node:Node|null,result:number[])=>{
    if(!node) return ;
    inOrderTraversalRecursive(node.left,result);
    result.push(node.val);
    inOrderTraversalRecursive(node.right,result);
}