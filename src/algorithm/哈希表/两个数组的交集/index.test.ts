import {intersection} from './index';
describe("两个数组的交集",()=>{
    test('intersection 1',()=>{
        expect(intersection([1,2,2,1],[2,2])).toBe([2]);
    });

    test('intersection 2',()=>{
        expect(intersection([4,9,5],[9,4,9,8,4])).toBe([9,4]);
    });
});