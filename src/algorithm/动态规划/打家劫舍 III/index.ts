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

    // TODO: 如果偷当前节点 node 那么为了利益最大化只能继续投 孙子节点
    const currentValSum = leftMaxValsSum[1] + rightMaxValsSum[1] + node.val;
    // TODO: 如果不偷当前节点 node 那么子节点 与 孙子节点可以选择最大值的组合来偷，不必拘泥于当前节点不偷就只能偷 子节点而不能偷孙子节点。
    const childValSum = Math.max(...leftMaxValsSum) + Math.max(...rightMaxValsSum);
    return [currentValSum,childValSum];
}