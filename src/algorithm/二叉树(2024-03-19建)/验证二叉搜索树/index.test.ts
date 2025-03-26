import { isValidBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('验证二叉搜索树', () => {
    test("isValidBST 1", () => {
        const root:any = buildBinaryTree([2,1,3]);
        expect(isValidBST(root)).toEqual(true);
    });

    test("isValidBST 2", () => {
        const root:any = buildBinaryTree([5,1,4,null,null,3,6]);
        expect(isValidBST(root)).toEqual(false);
    });
    
});