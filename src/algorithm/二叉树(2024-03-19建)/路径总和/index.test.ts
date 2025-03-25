import { hasPathSum } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('路径总和', () => {
    test("hasPathSum 1", () => {
        const root:any = buildBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
        expect(hasPathSum(root,22)).toEqual(true);
    });

    test("hasPathSum 1", () => {
        const root:any = buildBinaryTree([1,2,3]);
        expect(hasPathSum(root)).toEqual(5);
    });
    
});