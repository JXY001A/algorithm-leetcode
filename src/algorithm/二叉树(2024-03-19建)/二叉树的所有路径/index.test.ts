import { binaryTreePaths } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉树的所有路径', () => {
    test("binaryTreePaths 1", () => {
        const root:any = buildBinaryTree([1,2,3,null,5]);
        expect(binaryTreePaths(root)).toEqual(["1->2->5","1->3"]);
    });

    test("binaryTreePaths 1", () => {
        const root:any = buildBinaryTree([1]);
        expect(binaryTreePaths(root)).toEqual(["1"]);
    });
    
});
