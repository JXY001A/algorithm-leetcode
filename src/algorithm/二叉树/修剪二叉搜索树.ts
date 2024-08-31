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
  left?:TreeNode | null;
  right?:TreeNode | null;
};


// TODO: 如果一个节点不在给定范围内，如果小于最小范围，则应该返回其右子树中的某个节点，反之 大于最大范围则返回该节点左子树中的某个节点。如果该节点符合条件，则对其左右子树进行调整。
// 核心逻辑：符合条件节点保留，反之不返回。 需细细品之
function trimBST(root: TreeNode | null | undefined, low: number, high: number): TreeNode | null | undefined {
  if(!root) return null;
  if(root.val < low) {
    return trimBST(root?.right,low,high);
  }
  if(root.val > high) {
    return trimBST(root.left,low,high);
  }

  root.left = trimBST(root.left,low,high);
  root.right = trimBST(root.right,low,high);

  return root;
};