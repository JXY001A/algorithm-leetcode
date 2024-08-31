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
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return Math.max(maxDepth(root.left!),maxDepth(root.right!)) + 1;
};


function maxDepth2(root: TreeNode | null): number {
  let depth = 0;
  if(!root) return depth;
  const queue:TreeNode[] = [root];

  while(queue.length>0) {
    let currentLevelNodeCount = queue.length;

    while(currentLevelNodeCount>0) {
      currentLevelNodeCount-=1;
      const templNode = queue.shift();

      templNode?.left && queue.push(templNode?.left);
      templNode?.right && queue.push(templNode?.right);
    } 
    depth+=1;
  }

  return depth;
};