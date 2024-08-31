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

function insertIntoBST(root: TreeNode | null | undefined, val: number): TreeNode | null {
  if(!root) {
      return {
          val,
          left:null,
          right:null,
      };
  }

  if(root.val > val) {
      root.left = insertIntoBST(root?.left,val);
  }else {
      root.right = insertIntoBST(root?.right,val);
  }

  return root;
};