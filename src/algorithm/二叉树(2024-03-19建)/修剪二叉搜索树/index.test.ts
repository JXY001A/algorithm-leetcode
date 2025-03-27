import { trimBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('修剪二叉搜索树', () => {
    test("trimBST 1", () => {
        const root = buildBinaryTree([1,0,2]) as any;
        const target = buildBinaryTree([1,null,2]) as any;
        expect(trimBST(root,1,2)).toEqual(target);
    });

    test("trimBST 1", () => {
        const root = buildBinaryTree([3,0,4,null,2,null,null,1]) as any;
        const target = buildBinaryTree([3,2,null,1]) as any;
        expect(trimBST(root,1,3)).toEqual(target);
    });

    
});

