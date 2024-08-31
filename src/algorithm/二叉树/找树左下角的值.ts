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

interface ValAndDepth  {val?:number;depth:number;}

function findBottomLeftValue(root: TreeNode | null): number {
  return findBottomLeftValueAndDepth(root,0)?.val || 0; 
};

function findBottomLeftValueAndDepth(root: TreeNode | null,depth:number): ValAndDepth {
  if(root && !root?.left && !root?.right) {
      return {
          val:root.val,
          depth,
      };
  }

  let leftBottomLeftValueAndDepth:ValAndDepth = {depth:-1,val:undefined};
  if(root?.left) {
      leftBottomLeftValueAndDepth = findBottomLeftValueAndDepth(root?.left,depth+1);
  }

  let rightBottomLeftValueAndDepth:ValAndDepth = {depth:-1,val:undefined};
  if(root?.right) {
      rightBottomLeftValueAndDepth = findBottomLeftValueAndDepth(root?.right,depth+1);
  }

  return leftBottomLeftValueAndDepth.depth >= rightBottomLeftValueAndDepth.depth ? leftBottomLeftValueAndDepth : rightBottomLeftValueAndDepth;

};