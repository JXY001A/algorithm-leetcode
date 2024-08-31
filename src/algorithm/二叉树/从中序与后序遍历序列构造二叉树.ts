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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
   
  if(inorder.length === 0 || postorder.length ===0) return null;

  const rootVal =  postorder.pop()!;
  const roorValIndexAtInorder = inorder.indexOf(rootVal);

  const leftInOrder = inorder.slice(0,roorValIndexAtInorder);
  const rightInOrder = inorder.slice(roorValIndexAtInorder+1);

  const leftPostorder = postorder.slice(0,leftInOrder.length);

  const rightPostorder = postorder.slice(leftInOrder.length);
  
  return {
      val:rootVal,
      left:buildTree(leftInOrder,leftPostorder),
      right:buildTree(rightInOrder,rightPostorder),
  };
};