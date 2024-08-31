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

function binaryTreePaths(root: TreeNode | null): string[] {
  const result:string[] = [];  
  if(!root) return result;
  getTreePaths(root,[],result);
  return result;
};

const getTreePaths = (root: TreeNode , paths:number[],result:string[])=>{
  // 传入是保证了 root 一定存在，则先将 paths 传入
  paths.push(root.val);
  // root 节点存在，且 左右子树都不存在则可确定 root 为叶子节点
  if(!root?.left && !root?.right) {
    result.push(paths.join('->'));
    return;
  }
  
  if(root.left) {
    getTreePaths(root.left,paths,result);
    // 退出左子树路径
    paths.pop();
  }
  if(root.right) {
    getTreePaths(root.right,paths,result);
    // 退出右子树路径
    paths.pop();
  }
}