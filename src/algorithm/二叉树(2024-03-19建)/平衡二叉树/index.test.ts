import { isBalanced } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('平衡二叉树', () => {
    test("isBalanced 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7]);
        expect(isBalanced(root)).toEqual(true);
    });

    test("isBalanced 2", () => {
        const root:any = buildBinaryTree([1,2,2,3,3,null,null,4,4]);
        expect(isBalanced(root)).toEqual(false);
    });

    test("isBalanced 3", () => {
        const root:any = buildBinaryTree([1,2,2,3,null,null,3,4,null,null,4]);
        expect(isBalanced(root)).toEqual(false);
    });
});
