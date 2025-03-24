import { isSymmetric,isSymmetricTraversal } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('翻转二叉树', () => {
    test("isSymmetric 1", () => {
        const root = buildBinaryTree([1,2,2,3,4,4,3]) as any;
        expect(isSymmetric(root)).toEqual(true);
    });

    test("isSymmetric 2", () => {
        const root:any = buildBinaryTree([1,2,2,null,3,null,3]);
        expect(isSymmetric(root)).toEqual(false);
    });

    test("isSymmetricTraversal 1", () => {
        const root = buildBinaryTree([1,2,2,3,4,4,3]) as any;
        expect(isSymmetricTraversal(root)).toEqual(true);
    });

    test("isSymmetricTraversal 2", () => {
        const root:any = buildBinaryTree([1,2,2,null,3,null,3]);
        expect(isSymmetricTraversal(root)).toEqual(false);
    });
    
});
