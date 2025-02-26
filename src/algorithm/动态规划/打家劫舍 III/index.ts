/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
type TreeNode = {
    val:number;
    left?:TreeNode;
    right?:TreeNode;
};

function rob(root?: TreeNode): number {
    return Math.max(_rob(root));
};

function _rob(node?:TreeNode) {
    if(!node) return [0,0];

    const leftMaxValsSum =  _rob(node.left);
    const rightMaxValsSum = _rob(node.right);

    const currentValSum = leftMaxValsSum[1] + rightMaxValsSum[1] + node.val;
    const childValSum = leftMaxValsSum[0] + rightMaxValsSum[0];

    return [currentValSum,childValSum];
}