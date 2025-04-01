import {isHappy} from './index';

describe("快乐数",()=>{
    test('isHappy 1',()=>{
        expect(isHappy(19)).toEqual(true);
    });
    test('isHappy 2',()=>{
        expect(isHappy(2)).toEqual(false);
    });
});