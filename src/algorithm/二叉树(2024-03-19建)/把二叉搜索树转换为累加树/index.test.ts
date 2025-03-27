import { convertBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树中的插入操作', () => {
    test("convertBST 1", () => {
        const root = buildBinaryTree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]) as any;
        const target = buildBinaryTree([30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]) as any;
        expect(convertBST(root)).toEqual(target);
    });

    test("convertBST 2", () => {
        const root = buildBinaryTree([0,null,1]) as any;
        const target = buildBinaryTree([1,null,1]) as any;
        expect(convertBST(root)).toEqual(target);
    });

    test("convertBST 3", () => {
        const root = buildBinaryTree([1,0,2]) as any;
        const target = buildBinaryTree([3,3,2]) as any;
        expect(convertBST(root)).toEqual(target);
    });

    test("convertBST 3", () => {
        const root = buildBinaryTree([3,2,4,1]) as any;
        const target = buildBinaryTree([7,9,4,10]) as any;
        expect(convertBST(root)).toEqual(target);
    });
});

