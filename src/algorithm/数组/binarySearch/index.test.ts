import {search } from './index';
describe("翻转字符串里的单词",()=>{
    test('search 1',()=>{
        const nums = [-1,0,3,5,9,12];
        const target = 9;
        expect(search(nums,target)).toEqual(4);
    }); 
    test('search 2',()=>{
        const nums = [-1,0,3,5,9,12];
        const target = 2;
        expect(search(nums,target)).toEqual(-1);
    }); 
});