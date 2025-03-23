type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};

export const preOrderTraversal = (root:Node)=>{
    const stack:Node[] =  [];
    const result:number[] = [];
    let node:Node|null = root;

    while(stack.length>0 || node) {
        if(node) {
            stack.push(node);
            result.push(node.val);
            node = node.left;
        }else {
            const tempNode = stack.pop()!;
            node = tempNode.right;
        }
    }

    return result;
}