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

function minDepth0(root: TreeNode | null | undefined): number {
  if(!root) return 0;
  const leftDepth = minDepth(root.left!);
  const rightDepth = minDepth(root.right!);
  // TODO: 同理如果右子树不存在，则最小深度等于 1 + 左子树的深度
  if(leftDepth && !rightDepth) {
      return leftDepth + 1; 
  }
  // TODO: 注意如果左子树不存在，则最小深度等于 1 + 右子树的深度
  if(!leftDepth && rightDepth) {
      return rightDepth + 1; 
  }

  return Math.min(leftDepth,rightDepth) + 1;
};

function minDepth(root: TreeNode | null): number {
  let depth = 0;
  const queue:TreeNode[] = [];
  if(root) {
     queue.push(root); 
  }

  while(queue.length) {
      let currentLevelCount = queue.length;
      depth+=1;
      while(currentLevelCount>0) {
          currentLevelCount-=1;
          const currentNode = queue.shift();
          if(!currentNode?.left && !currentNode?.right) {
              return depth;
          }
          currentNode.left && queue.push(currentNode.left);
          currentNode.right && queue.push(currentNode.right);
      }
  }

  return depth;
};