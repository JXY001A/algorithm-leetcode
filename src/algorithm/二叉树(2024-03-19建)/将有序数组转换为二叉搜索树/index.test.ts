import { sortedArrayToBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树中的插入操作', () => {
    test("sortedArrayToBST 1", () => {
        const target = buildBinaryTree([0,-3,9,-10,null,5]) as any;
        expect(sortedArrayToBST([-10,-3,0,5,9])).toEqual(target);
    });

    test("sortedArrayToBST 2", () => {
        const target = buildBinaryTree([3,1]) as any;
        expect(sortedArrayToBST([1,3])).toEqual(target);
    });
});

