import { sortedArrayToBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树中的插入操作', () => {
    test("sortedArrayToBST 1", () => {
        const target = buildBinaryTree([0,-10,5,null,-3,null,9]) as any;
        expect(sortedArrayToBST([-10,-3,0,5,9])).toEqual(target);
    });

    test("sortedArrayToBST 2", () => {
        const target = buildBinaryTree([1,null,3]) as any;
        expect(sortedArrayToBST([1,3])).toEqual(target);
    });
});

