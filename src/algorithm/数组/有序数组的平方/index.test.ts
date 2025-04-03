import {sortedSquares } from './index';
describe("翻转字符串里的单词",()=>{
    test('sortedSquares 1',()=>{
        expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
    });

    test('sortedSquares 2',()=>{
        expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
    });
});