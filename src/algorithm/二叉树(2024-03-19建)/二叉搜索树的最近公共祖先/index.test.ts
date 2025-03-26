import { lowestCommonAncestor } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树的最近公共祖先', () => {
    test("lowestCommonAncestor 1", () => {
        const root:any = buildBinaryTree([6,2,8,0,4,7,9,null,null,3,5]);
        const p:any = buildBinaryTree([2]);
        const q:any = buildBinaryTree([8]);
        expect(lowestCommonAncestor(root,p,q)).toEqual(root);
    });

    test("lowestCommonAncestor 2", () => {
        const root:any = buildBinaryTree([6,2,8,0,4,7,9,null,null,3,5]);
        const p:any = buildBinaryTree([2]);
        const q:any = buildBinaryTree([3]);
        const tartget:any = buildBinaryTree([2,0,4,null,null,3,5]);
        expect(lowestCommonAncestor(root,p,q)).toEqual(tartget);
    });
});
    