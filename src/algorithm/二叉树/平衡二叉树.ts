interface TreeNode {
  val:number;
  left?:TreeNode;
  right?:TreeNode;
};

function isBalanced(root: TreeNode | null): boolean {
  return getDepth(root) !== -1;
};

const getDepth = (root?: TreeNode | null):number=>{
  if(!root) return 0;
  
  const leftDepth = getDepth(root.left);
  if(leftDepth === -1) return -1;
  const rightDepth = getDepth(root.left);
  if(rightDepth === -1) return -1;

  return Math.abs(leftDepth-rightDepth) > 1 ? -1 : Math.max(leftDepth,rightDepth) + 1;
}