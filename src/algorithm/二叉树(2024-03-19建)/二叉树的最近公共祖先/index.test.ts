import { lowestCommonAncestor } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉树的最近公共祖先', () => {
    test("lowestCommonAncestor 1", () => {
        const root:any = buildBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
        const p:any = buildBinaryTree([5]);
        const q:any = buildBinaryTree([1]);
        expect(lowestCommonAncestor(root,p,q)).toEqual(root);
    });

    test("lowestCommonAncestor 2", () => {
        const root:any = buildBinaryTree([3,5,1,6,2,0,8,null,null,7,4]);
        const p:any = buildBinaryTree([5]);
        const q:any = buildBinaryTree([4]);
        const tartget:any = buildBinaryTree([5,6,2,null,null,7,4]);
        expect(lowestCommonAncestor(root,p,q)).toEqual(tartget);
    });
});
    