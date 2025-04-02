import {threeSum} from './index';

describe("三数之和",()=>{
    test('threeSum 1',()=>{
        expect(threeSum( [-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]]);
    });

    test('threeSum 2',()=>{
        expect(threeSum([0,1,1])).toEqual([]);
    });

    test('threeSum 3',()=>{
        expect(threeSum([0,0,0])).toEqual([[0,0,0]]);
    });

    test('threeSum 4',()=>{
        expect(threeSum([1,-1,-1,0])).toEqual([[-1,0,1]]);
    });

    
});