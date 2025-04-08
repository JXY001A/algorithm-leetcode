import { generateMatrix } from './index';
describe("螺旋矩阵II",()=>{
    test('generateMatrix 1',()=>{
        expect(generateMatrix(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]]);
    });

    test('generateMatrix 2',()=>{
        expect(generateMatrix(1)).toEqual([[1]]);
    });

});