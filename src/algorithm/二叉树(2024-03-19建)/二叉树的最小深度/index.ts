type Node = {
    val:number;
    left: Node | null,
    right: Node | null,
};

export function minDepth(root: Node | null): number {
    if(!root) return 0;
    const minLeft =  minDepth(root.left);
    const minRight  = minDepth(root.right);

    if(root.left && !root.right) {
        return 1+ minLeft;
    }

    if(root.right && !root.left) {
        return 1+minRight;
    }


    return 1+Math.min(minRight,minLeft);
};