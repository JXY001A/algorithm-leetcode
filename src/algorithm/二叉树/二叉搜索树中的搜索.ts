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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if(root?.val === val) {
      return root;
  }

  if(root && root?.val > val && root?.left) {
      return searchBST(root.left,val);
  }

  if(root && root?.val < val && root.right) {
      return searchBST(root.right,val);
  }

  return null;
};  

