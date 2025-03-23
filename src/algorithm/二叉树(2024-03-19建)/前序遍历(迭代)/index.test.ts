import { preOrderTraversal } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('前序遍历(迭代)', () => {
    test("preOrderTraversal 1", () => {
        const root:any = buildBinaryTree([1,2,3,4,5,null,8,null,null,6,7,9]);
        expect(preOrderTraversal(root)).toEqual([1,2,4,5,6,7,3,8,9]);
    });

    test("preOrderTraversal 1", () => {
        const root:any = buildBinaryTree([1,null,2,3]);
        expect(preOrderTraversal(root)).toEqual([1,2,3]);
    });
    
});
