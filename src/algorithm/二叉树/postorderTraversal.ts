
interface Node {
  val:number;
  left?:Node;
  right:Node;
}
export const postOrderTraversal =(root:Node):number[]=>{
  const result:number[] = [];
  if(!root) return result;
  const stack:Node[] = [];
  let current:any = root;
  while(stack.length>0 || current) {
    if(current) {
      stack.push(current);
      current = current.left;
    }else {
      const node = stack.pop()!;
      result.push(node?.val);
      current = node.right;
    }
  }
  return result;
}