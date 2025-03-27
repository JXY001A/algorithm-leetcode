import { deleteNode } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('删除二叉搜索树中的节点', () => {
    test("deleteNode 1", () => {
        const root = buildBinaryTree([5,3,6,2,4,null,7]) as any;
        const target = buildBinaryTree([5,4,6,2,null,null,7]) as any;
        expect(deleteNode(root,3)).toEqual(target);
    });

    test("deleteNode 2", () => {
        const root = buildBinaryTree([5,3,6,2,4,null,7]) as any;
        const target = buildBinaryTree([5,3,6,2,4,null,7]) as any;
        expect(deleteNode(root,0)).toEqual(target);
    });

    test("deleteNode 3", () => {
        const root = buildBinaryTree([]) as any;
        const target = buildBinaryTree([]) as any;
        expect(deleteNode(root,0)).toEqual(target);
    });
    
});

