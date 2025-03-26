import { constructMaximumBinaryTree } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('最大二叉树', () => {
    test("constructMaximumBinaryTree 1", () => {
        const root:any = buildBinaryTree([6,3,5,null,2,0,null,null,1]);
        expect(constructMaximumBinaryTree([3,2,1,6,0,5])).toEqual(root);
    });

    
    test("constructMaximumBinaryTree 2", () => {
        const root:any = buildBinaryTree([3,null,2,null,1]);
        expect(constructMaximumBinaryTree( [3,2,1])).toEqual(root);
    });
});
