import {intersection,intersectionSet} from './index';
describe("两个数组的交集",()=>{
    test('intersection 1',()=>{
        expect(intersection([1,2,2,1],[2,2])).toEqual([2]);
    });

    test('intersection 2',()=>{
        expect(intersection([4,9,5],[9,4,9,8,4])).toEqual([4,9]);
    });

    test('intersectionSet 1',()=>{
        expect(intersectionSet([1,2,2,1],[2,2])).toEqual([2]);
    });

    test('intersectionSet 2',()=>{
        expect(intersectionSet([4,9,5],[9,4,9,8,4])).toEqual([9,4]);
    });
});