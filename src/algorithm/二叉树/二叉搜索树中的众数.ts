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

function findMode(root: TreeNode | null): number[] {
  let result:number[] = [];
  let prevNode:TreeNode|null = null;
  let maxCount = 0;
  let count = 0;

  const getMode = (root?:TreeNode|null)=>{
      if(!root) return ;
      getMode(root?.left);
      if(!prevNode) {
          //第一次初始化为 1
          count=1;
      }else if(prevNode?.val === root.val) {
          // 相同则持续累加
          count+=1;
      }else {
          // 不相通则清空
          count=1;
      }

      if(count > maxCount) {
          result = [root?.val];
      }else if(count === maxCount){
          result.push(root.val);
      }
      maxCount = Math.max(maxCount,count);


      prevNode = root;
      getMode(root.right);
  }

  getMode(root);
  return result;
};