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

function invertTree(root: TreeNode | null): TreeNode | null {
  preOrderRecursiveInvert(root!);
  return root;
};

const preOrderRecursiveInvert = (node?:TreeNode)=>{
  if(!node) return;
  [node.left,node.right] = [node.right,node.left];
  preOrderRecursiveInvert(node.left);
  preOrderRecursiveInvert(node.right);
}


const preOrderTraversalInvert = (node?:TreeNode)=>{
  const stack:TreeNode[] = [];
  if(node) {
    stack.push(node);
  }

  while(stack.length>0) {
    const node = stack.pop()!;
    [node.left,node.right] = [node.right,node.left];
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  
}


const inOrderTraversalInvert = (node?:TreeNode)=>{
  const stack:TreeNode[] = [];
  let currentNode = node;

  while(stack.length > 0 || currentNode) {
    if(currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }else {
      let templNode = stack.pop()!;
      currentNode = templNode.right;
    }
  }
}
