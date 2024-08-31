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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if(nums.length === 0) return null;
  const rootVal = getMaxNumber(nums);
  const rootValIndexAtNumber = nums.indexOf(rootVal);
  return {
      val:rootVal,
      left:constructMaximumBinaryTree(nums.slice(0,rootValIndexAtNumber)),
      right:constructMaximumBinaryTree(nums.slice(rootValIndexAtNumber+1)),
  };
};

const getMaxNumber = (nums:number[])=>{
  let maxNum = -1;
  for(let i=0;i<nums.length;i+=1) {
      maxNum = Math.max(maxNum,nums[i]);
  }
  return maxNum;
}
