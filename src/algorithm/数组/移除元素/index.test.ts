import {removeElement } from './index';
describe("翻转字符串里的单词",()=>{
    test('removeElement 1',()=>{
        const nums = [3,2,2,3];
        const val = 3;
        expect(removeElement(nums,val)).toEqual(2);
    }); 

    test('removeElement 2',()=>{
        const nums = [0,1,2,2,3,0,4,2];
        const val = 2;
        expect(removeElement(nums,val)).toEqual(5);
    }); 
});