import { buildTree } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('从中序与后序遍历序列构造二叉树', () => {
    test("buildTree 1", () => {
        const root:any = buildBinaryTree([3,9,20,null,null,15,7]);
        expect(buildTree( [3,9,20,15,7],[9,3,15,20,7])).toEqual(root);
    });

    test("buildTree 2", () => {
        const root:any = buildBinaryTree([-1]);
        expect(buildTree( [-1], [-1])).toEqual(root);
    });
    
});
