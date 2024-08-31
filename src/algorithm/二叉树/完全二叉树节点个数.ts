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

function countNodes(root: TreeNode | null): number {
  if(!root) return 0;

  const leftDepth = getMaxDepth(root.left);
  const rightDepth = getMaxDepth(root.right);
  // 满二叉树节点个数为：2^depth - 1
  // 切记完全二叉树定义：在完全二叉树中，只有最底层节点未能填满。而底层叶子节点都优先左子树。
  // 如果左右子树的高度相同，那么可以确定的是左子树为 满二叉树。右侧是不是满二叉树不确定
  // 额外的 +1 是计算了当前传入的 root 节点 
  if(leftDepth === rightDepth) {
    return (Math.pow(2,leftDepth) - 1) +1 +  countNodes(root?.right!);
  }else {
    // 同样如果 左右子树深度不相同，那么说明右子树为完全二叉树（叶子节点都优先靠左子树，那么左右子树深度不同，坑定说明左子树深度大于右子树，而只有在最下层才可能出现节点不满的情况，所以此时右子树也是满二叉树）；
    return (Math.pow(2,rightDepth) - 1) +1 +  countNodes(root?.left!);
  }
};

const getMaxDepth = (root?: TreeNode)=>{
  let depth = 0;
  while(root) {
    root = root.left;
    depth+=1;
  }
  return depth;
}