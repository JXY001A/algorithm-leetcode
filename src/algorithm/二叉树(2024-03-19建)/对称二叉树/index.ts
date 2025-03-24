type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

export function isSymmetric(root: TreeNode | null): boolean {
    return comparerRecursive(root?.left!,root?.right!);
};
const comparerRecursive = (left:TreeNode | null,right:TreeNode | null)=>{
    if(left === null && right !== null) {
        return false;
    }
    if(left !== null && right === null) {
        return false
    }
    if(left===null && right === null) {
        return true;
    }
    if(left?.val !== right?.val) {
        return false;
    }

    const outerCompare = comparerRecursive(left?.left!,right?.right!);
    const innerCompare = comparerRecursive(left?.right!,right?.left!);

    return outerCompare && innerCompare;
}

export const isSymmetricTraversal = (root:TreeNode|null):boolean=>{
    if(root === null) return true;
    const stack:(TreeNode|null)[] = [root.left,root.right];
    while(stack.length>0) {
        const tempNode1 = stack.shift();
        const tempNode2 = stack.shift();
        if(tempNode1 && tempNode2 ===null) return false;
        if(tempNode1===null && tempNode2) return false;
        if(tempNode1 === null && tempNode2 === null) {
            continue;
        }
        if(tempNode1?.val !== tempNode2?.val) return false;

        stack.push(tempNode1?.left!);
        stack.push(tempNode2?.right!);
        stack.push(tempNode1?.right!);
        stack.push(tempNode2?.left!);
    }
    return true;
}