import { searchBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树中的搜索', () => {
    test("searchBST 1", () => {
        const root:any = buildBinaryTree([4,2,7,1,3]);
        const target:any = buildBinaryTree([2,1,3]); 
        expect(searchBST(root,2)).toEqual(target);
    });

    test("searchBST 2", () => {
        const root:any = buildBinaryTree([4,2,7,1,3]);
        const target:any = buildBinaryTree([]); 
        expect(searchBST(root,5)).toEqual(target);
    });
    
});
