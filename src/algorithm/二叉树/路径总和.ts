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

function hasPathSum0(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  targetSum -= root.val;
  if(targetSum === 0 && !root.left && !root.right) return true;


  let leftHasPathSum = false;
  if(root?.left) {
      leftHasPathSum = hasPathSum(root.left,targetSum);
  }   

  let rightHasPathSum = false;
  if(root?.right) {
      rightHasPathSum = hasPathSum(root.right,targetSum);
  } 

  return   leftHasPathSum || rightHasPathSum;
};

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  
  const stack:TreeNode[] = [root];
  const sumStack:number[] = [targetSum];
  
  while(stack.length > 0) {
      const root = stack.pop()!;
      const currentSum = sumStack.pop()!;

      if(root?.val === currentSum && !root?.left && !root?.right) {
          return true;
      }

      const newCurrentSum = currentSum - root?.val;
      if(root?.right) {
          stack.push(root.right);
          sumStack.push(newCurrentSum);
      }

      if(root?.left) {
          stack.push(root.left);
          sumStack.push(newCurrentSum);
      }
  }

  return false;
  
};

