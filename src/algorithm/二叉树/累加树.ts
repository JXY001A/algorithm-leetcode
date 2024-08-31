interface TreeNode {
  val:number;
  left?:TreeNode | null;
  right?:TreeNode | null;
};


export  function convertBST(root?: TreeNode | null): TreeNode | null| undefined {
  let count = 0;
  const convert = (node?: TreeNode | null)=>{
      if(!node) return;
      convert(node?.right);
      node.val+=count;
      count = node.val;
      convert(node?.left);
  }

  convert(root);
  return root;
};