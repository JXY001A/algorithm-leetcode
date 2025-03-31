import {isAnagram} from './index';
describe("有效的字母异位词",()=>{
    test('isAnagram 1',()=>{
        const s = "anagram"; 
        const t = "nagaram";
        expect(isAnagram(s,t)).toBe(true);
    });

    test('isAnagram 2',()=>{
        const s = "rat"; 
        const t = "car";
        expect(isAnagram(s,t)).toBe(false);
    });
});