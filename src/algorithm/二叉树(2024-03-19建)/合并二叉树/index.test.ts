import { mergeTrees } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('合并二叉树', () => {
    test("mergeTrees 1", () => {
        const root1 = buildBinaryTree([1,3,2,5]) as any;
        const root2 = buildBinaryTree([2,1,3,null,4,null,7]) as any;
        const target = buildBinaryTree([3,4,5,5,4,null,7]) as any;
        expect(mergeTrees(root1,root2)).toEqual(target);
    });

    test("mergeTrees 2", () => {
        const root1:any = buildBinaryTree([1]);
        const root2:any = buildBinaryTree([1,2]);
        const target:any = buildBinaryTree([2,2]);
        
        expect(mergeTrees(root1,root2)).toEqual(target);
    });
    
});
