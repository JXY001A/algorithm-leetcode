type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};

export  function maxDepth(root: Node | null): number {
    if(!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1+Math.max(leftDepth,rightDepth);
};