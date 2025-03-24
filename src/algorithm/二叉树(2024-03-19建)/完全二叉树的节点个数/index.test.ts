import { countNodes } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('完全二叉树的节点个数', () => {
    test("countNodes 1", () => {
        const root:any = buildBinaryTree([1,2,3,4,5,6]);
        expect(countNodes(root)).toEqual(6);
    });
    
});