import { postOrderTraversal } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('前序遍历(递归)', () => {
    test("postOrderTraversal 1", () => {
        const root:any = buildBinaryTree([1,2,3,4,5,null,8,null,null,6,7,9]);
        expect(postOrderTraversal(root)).toEqual([4,6,7,5,2,9,8,3,1]);
    });

    test("postOrderTraversal 1", () => {
        const root:any = buildBinaryTree([1,null,2,3]);
        expect(postOrderTraversal(root)).toEqual([3,2,1]);
    });
    
});