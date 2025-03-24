import { maxDepth } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉树的最大深度', () => {
    test("maxDepth 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7]);
        expect(maxDepth(root)).toEqual(3);
    });

    test("maxDepth 1", () => {
        const root:any = buildBinaryTree([1,null,2]);
        expect(maxDepth(root)).toEqual(2);
    });
    
});
