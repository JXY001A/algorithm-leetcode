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
  left?:TreeNode;
  right?:TreeNode;
};

function getMinimumDifference(root: TreeNode | null): number {
  let minDiffValue  = Number.MAX_SAFE_INTEGER;
  let prevNode:TreeNode|null  = null; 
  const minDiff = (root)=>{
      if(!root) return;
      minDiff(root.left);
      if(prevNode) {
        minDiffValue = Math.min(minDiffValue,Math.abs(prevNode.val - root.val));
      }
      prevNode = root;
      minDiff(root.right);
  }

  minDiff(root);
  return minDiffValue;
};