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
  right:TreeNode;
}

export function levelOrder(root: TreeNode | null): number[][] {
    const result:number[][] = [];
    const queue:TreeNode[] = [];
    if(root) {
      queue.push(root);
    }
    while(queue.length>0) {
      let currentLevelNodeCount = queue.length;
      const tempResult:number[] = [];
      while(currentLevelNodeCount>0) {
        const node = queue.shift();
        tempResult.push(node?.val!);
        node?.left && queue.push(node?.left);
        node?.right && queue.push(node?.right);
        currentLevelNodeCount-=1;
      }
      result.push(tempResult);
    }
    return result;
};