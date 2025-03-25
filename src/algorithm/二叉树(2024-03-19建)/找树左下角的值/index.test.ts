import { findBottomLeftValue } from './index';
import { buildBinaryTree } from '../构建二叉树(按层级)/index';
describe('找树左下角的值', () => {
    test("findBottomLeftValue 1", () => {
        const root:any = buildBinaryTree([2,1,3]);
        expect(findBottomLeftValue(root)).toEqual(1);
    });

    
    test("findBottomLeftValue 2", () => {
        const root:any = buildBinaryTree([1,2,3,4,null,5,6,null,null,7]);
        expect(findBottomLeftValue(root)).toEqual(7);
    });
    
    test("findBottomLeftValue 3", () => {
        const root:any = buildBinaryTree([0]);
        expect(findBottomLeftValue(root)).toEqual(0);
    });
});
