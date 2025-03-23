import { inOrderTraversal } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('前序遍历(递归)', () => {
    test("inOrderTraversal 1", () => {
        const root:any = buildBinaryTree([1,2,3,4,5,null,8,null,null,6,7,9]);
        expect(inOrderTraversal(root)).toEqual([4,2,6,5,7,1,3,9,8]);
    });

    test("inOrderTraversal 1", () => {
        const root:any = buildBinaryTree([1,null,2,3]);
        expect(inOrderTraversal(root)).toEqual([1,3,2]);
    });
    
});
