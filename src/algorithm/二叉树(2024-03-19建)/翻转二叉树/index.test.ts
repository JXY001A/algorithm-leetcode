import { invertTree } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('翻转二叉树', () => {
    test("invertTree 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7]);
        expect(invertTree(root)).toEqual([[3],[9,20],[15,7]]);
    });

    test("invertTree 2", () => {
        const root:any = buildBinaryTree([1]);
        expect(invertTree(root)).toEqual([[1]]);
    });
    
});
