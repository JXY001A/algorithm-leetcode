import { levelOrder } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('层级遍历', () => {
    test("levelOrder 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7]);
        expect(levelOrder(root)).toEqual([[3],[9,20],[15,7]]);
    });

    test("levelOrder 2", () => {
        const root:any = buildBinaryTree([1]);
        expect(levelOrder(root)).toEqual([[1]]);
    });
    
});
