import { findMode } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树中的众数', () => {
    test("findMode 1", () => {
        const root:any = buildBinaryTree([1,null,2,2]);
        const target:any = [2]; 
        expect(findMode(root)).toEqual(target);
    });

    test("findMode 2", () => {
        const root:any = buildBinaryTree([0]);
        const target:any = [0]; 
        expect(findMode(root)).toEqual(target);
    });

    
});
