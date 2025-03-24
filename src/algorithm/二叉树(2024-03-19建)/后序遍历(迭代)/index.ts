type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};
export const postOrderTraversal = (root:Node) =>{
    const result:number[] = [];
    const stack:Node[]= [];
    let node:Node | null = root;
    while(stack.length>0 || node) {
        if(node) {
            stack.push(node);
            result.unshift(node.val);
            node = node.right;
        }else {
            const tempNode = stack.pop()!;
            node = tempNode.left;
        }
    }

    return result;
}