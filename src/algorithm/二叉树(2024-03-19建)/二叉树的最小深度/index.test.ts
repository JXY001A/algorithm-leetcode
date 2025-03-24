import { minDepth } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉树的最大深度', () => {
    test("minDepth 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7]);
        expect(minDepth(root)).toEqual(2);
    });

    test("minDepth 1", () => {
        const root:any = buildBinaryTree([2,null,3,null,4,null,5,null,6]);
        expect(minDepth(root)).toEqual(5);
    });
    
});
