import {commonChars} from './index';
describe("查找常用字符",()=>{
    test('commonChars 1',()=>{
        expect(commonChars(["bella","label","roller"])).toBe(["e","l","l"]);
    });

    test('commonChars 2',()=>{
        expect(commonChars(["cool","lock","cook"])).toBe(["c","o"]);
    });
});