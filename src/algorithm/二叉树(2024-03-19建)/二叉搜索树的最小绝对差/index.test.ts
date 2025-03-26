import { getMinimumDifference } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('二叉搜索树的最小绝对差', () => {
    test("getMinimumDifference 1", () => {
        const root = buildBinaryTree([4,2,6,1,3]) as any;
        expect(getMinimumDifference(root)).toEqual(1);
    });

    test("getMinimumDifference 2", () => {
        const root:any = buildBinaryTree([1,0,48,null,null,12,49]);
        expect(getMinimumDifference(root)).toEqual(1);
    });
    
});
