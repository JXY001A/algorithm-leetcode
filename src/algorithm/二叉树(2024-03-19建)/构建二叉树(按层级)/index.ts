function Node(val:number|null,left:any,right:any) {
    return {
        val,
        left,
        right,
    };
}

export const buildBinaryTree = (vals:(number|null)[])=>{
    if(vals.length ===0) return null;
    const rootVal = vals.shift()!;
    const root = Node(rootVal,null,null);
    const stack = [root];
    let currentLevelNodeCount = stack.length;
    while(vals.length>0) {
        while(currentLevelNodeCount>0 && vals.length>0) {

            const leftVal = vals.shift();
            const left = typeof leftVal === "number" ?  Node(leftVal,null,null) : null;

            const rightVal = vals.shift();
            const right = typeof rightVal === 'number' ? Node(rightVal,null,null) : null;

            const node = stack.shift()!;
            node.left = left;
            node.right = right;
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
            currentLevelNodeCount-=1;
        }
        currentLevelNodeCount = currentLevelNodeCount = stack.length;
    }

    return root;
}