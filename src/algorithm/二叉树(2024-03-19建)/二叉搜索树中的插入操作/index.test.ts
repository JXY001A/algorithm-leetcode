import { insertIntoBST } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树中的插入操作', () => {
    test("insertIntoBST 1", () => {
        const root = buildBinaryTree([4,2,7,1,3]) as any;
        const target = buildBinaryTree([4,2,7,1,3,5]) as any;
        expect(insertIntoBST(root,5)).toEqual(target);
    });

    test("insertIntoBST 2", () => {
        const root = buildBinaryTree([40,20,60,10,30,50,70]) as any;
        const target = buildBinaryTree([40,20,60,10,30,50,70,null,null,25]) as any;
        expect(insertIntoBST(root,25)).toEqual(target);
    });

    test("insertIntoBST 2", () => {
        const root = buildBinaryTree([4,2,7,1,3,null,null,null,null,null,null]) as any;
        const target = buildBinaryTree([4,2,7,1,3,5]) as any;
        expect(insertIntoBST(root,5)).toEqual(target);
    });
    
});

