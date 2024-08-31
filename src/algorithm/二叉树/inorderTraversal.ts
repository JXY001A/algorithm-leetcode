interface Node {
  val:number;
  left?:Node;
  right:Node;
}
const inOrderTraversal = (root:Node):number[]=>{
  const result:number[] = [];
  if(!root) return  result;

  const stack = [root];

  while(stack.length>0) {
    const node = stack.pop()!;
    result.push(node?.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
}