import { invertTree } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('翻转二叉树', () => {
    test("invertTree 1", () => {
        const root = buildBinaryTree([4,2,7,1,3,6,9]) as any;
        const target = buildBinaryTree([4,7,2,9,6,3,1]) as any;
        expect(invertTree(root)).toEqual(target);
    });

    test("invertTree 2", () => {
        const root:any = buildBinaryTree([1]);
        expect(invertTree(root)).toEqual(root);
    });
    
});
