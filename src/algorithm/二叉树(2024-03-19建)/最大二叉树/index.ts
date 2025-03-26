type TreeNode = {
    val:number;
    left: TreeNode | null,
    right: TreeNode | null,
};

const createTreeNode = (val:number):TreeNode=>{
    return {
        val,
        left:null,
        right:null
    };
}


export function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if(nums.length ===0) {
        return null;
    }

    const maxVal = Math.max(...nums);
    const maxValIndexOfNums = nums.indexOf(maxVal);

    const node = createTreeNode(maxVal);
    node.left = constructMaximumBinaryTree(nums.slice(0,maxValIndexOfNums));
    node.right = constructMaximumBinaryTree(nums.slice(maxValIndexOfNums+1));

    return node;
};



