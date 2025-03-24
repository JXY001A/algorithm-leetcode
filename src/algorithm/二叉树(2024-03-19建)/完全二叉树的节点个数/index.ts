type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};

export function countNodes(root: Node | null): number {
    if(!root) return 0;

    const leftCount =  countNodes(root.left);
    const rightCount = countNodes(root.right);

    return leftCount + rightCount + 1;
};