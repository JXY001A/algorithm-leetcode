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

// 递归法
function sumOfLeftLeaves0(root: TreeNode | null): number {

  let leftSum = 0;
  if(root?.left) {
      leftSum = sumOfLeftLeaves(root.left);
  }

  let rightSum = 0
  if(root?.right) {
      rightSum =  sumOfLeftLeaves(root.right)
  }

  if(root && root.left && !root.left.left && !root.left.right) {
      return root.left.val + leftSum + rightSum;
  }

  return leftSum + rightSum;

};


// 迭代法
function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum = 0;    
  if(!root) return sum;

  const stack:TreeNode[] = [root];

  while(stack.length>0) {
      const node = stack.shift();
      if(node?.left && !node.left.left && !node.left.right) {
          sum += node.left.val;
      }else if(node?.left) {
          stack.push(node.left);
      }

      if(node?.right) {
          stack.push(node.right);
      }
  }
  return sum;
};

