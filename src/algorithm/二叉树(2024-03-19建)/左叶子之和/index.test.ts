import { sumOfLeftLeaves } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('左叶子之和', () => {
    test("sumOfLeftLeaves 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7] );
        expect(sumOfLeftLeaves(root)).toEqual(24);
    });

    test("sumOfLeftLeaves 1", () => {
        const root:any = buildBinaryTree([1]);
        expect(sumOfLeftLeaves(root)).toEqual(0);
    });
    
});
