import { hasPathSum } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('路径总和', () => {
    test("hasPathSum 1", () => {
        const root:any = buildBinaryTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);
        expect(hasPathSum(root,22)).toEqual(true);
    });

    test("hasPathSum 2", () => {
        const root:any = buildBinaryTree([1,2,3]);
        expect(hasPathSum(root,5)).toEqual(false);
    });

    test("hasPathSum 3", () => {
        const root:any = buildBinaryTree([]);
        expect(hasPathSum(root,0)).toEqual(false);
    });
    test("hasPathSum 4", () => {
        const root:any = buildBinaryTree([1,2]);
        expect(hasPathSum(root,0)).toEqual(false);
    });

    test("hasPathSum 5", () => {
        const root:any = buildBinaryTree([-2,null,-3]);
        expect(hasPathSum(root,-5)).toEqual(true);
    });
});