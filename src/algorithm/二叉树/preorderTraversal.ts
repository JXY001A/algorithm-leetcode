// 前序：中左右 ， 后续：左右中
// 中右左 反转 左中右
interface Node {
  val:number;
  left?:Node;
  right:Node;
}
const postOrderTraversal = (root:Node):number[]=>{
  const result:number[] = [];
  if(!root) return result;
  const stack = [root];

  while(stack.length > 0) {
    const temlpNode = stack.pop()!;
    result.push(temlpNode?.val);
    temlpNode.left && stack.push(temlpNode.left);
    temlpNode.right && stack.push(temlpNode.right);
  }

  return result.reverse();
}