import {canConstruct} from './index';

describe("赎金信",()=>{
    test('canConstruct 1',()=>{
        expect(canConstruct('a','b')).toEqual(false);
    });

    test('canConstruct 2',()=>{
        expect(canConstruct('aa','ab')).toEqual(false);
    });

    test('canConstruct 3',()=>{
        expect(canConstruct('aa','aab')).toEqual(true);
    });
});