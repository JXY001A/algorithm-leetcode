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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if(nums.length === 0) return null;
  const middle = Math.floor((nums.length - 1)/2);
  return {
      val:nums[middle],
      left:sortedArrayToBST(nums.slice(0,middle)),
      right:sortedArrayToBST(nums.slice(middle+1)),
  }; 

};