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

function isSymmetric(root: TreeNode | null): boolean {
  const stack:TreeNode[] = [];
  if(root) {
    stack.push(root.left!);
    stack.push(root.right!);
  }

  while(stack.length > 0) {
    const left = stack.shift();
    const right = stack.shift();

    if(left?.val !== right?.val) {
      return false;
    }

    if(left && right) {
        stack.push(left.left!);
        stack.push(right.right!);

        stack.push(left.right!);
        stack.push(right.left!);
    }

  }
  
  return true;
};
