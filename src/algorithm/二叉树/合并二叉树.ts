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

interface TreeNode {
  val:number;
  left?:TreeNode | null | undefined;
  right?:TreeNode | null| undefined;
};


function mergeTrees(root1?: TreeNode | null, root2?: TreeNode | null): TreeNode | null | undefined {
  if(!root1 || !root2) return  root1 || root2;

  return {
    val:root1.val + root2.val,
    left:mergeTrees(root1?.left,root2.left),
    right:mergeTrees(root1?.right,root2.right),
  };

};