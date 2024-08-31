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


// TODO: 验证二叉搜索树的关键节点是：二搜索树的中序遍历为一个升序

interface TreeNode {
  val:number;
  left?:TreeNode | null;
  right?:TreeNode | null;
};

function isValidBST1(root: TreeNode | null): boolean {
  let prevNode:any = null;
  const validBST = (node)=>{
      if(!node) return true;
      const left = validBST(node.left);
      if(prevNode && prevNode?.val >= node.val) return false;
      prevNode = node;
      const right = validBST(node.right);

      return left &&  right;
  }

  return validBST(root);
};

function isValidBST(root: TreeNode | null): boolean {
  const stack:TreeNode[] = [];
  let currentNode:any = root;
  let prevNode:any = null;

  while(stack.length > 0 || currentNode) {
      if(currentNode) {
          stack.push(currentNode);
          currentNode = currentNode.left;
      }else {
          const temlpNode:any = stack.pop();
          if(prevNode && prevNode.val >= temlpNode?.val) return false;
          prevNode = temlpNode;
          currentNode = temlpNode.right;
      }
  }
  return true;
};

