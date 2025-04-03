import {minSubArrayLen } from './index';
describe("翻转字符串里的单词",()=>{
    test('minSubArrayLen 1',()=>{
        const target = 7;
        const nums = [2,3,1,2,4,3];
        expect(minSubArrayLen(target,nums)).toEqual(2);
    });

    test('minSubArrayLen 2',()=>{
        const target = 4;
        const nums = [1,4,4];
        expect(minSubArrayLen(target,nums)).toEqual(1);
    });

    test('minSubArrayLen 3',()=>{
        const target = 11;
        const nums = [1,1,1,1,1,1,1,1];
        expect(minSubArrayLen(target,nums)).toEqual(0);
    });
});