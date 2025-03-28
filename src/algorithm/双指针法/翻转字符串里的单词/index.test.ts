import {reverseWords } from './index';
describe("替换空格",()=>{
  test('reverseWords 1',()=>{
    const s = "the sky is blue";
    const target = "blue is sky the";
    expect(reverseWords(s)).toEqual(target);
  }); 

  test('reverseWords 2',()=>{
    const s = "  hello world  ";
    const target = "world hello";
    expect(reverseWords(s)).toEqual(target);
  }); 

  test('reverseWords 3',()=>{
    const s = "a good   example";
    const target = "example good a";
    expect(reverseWords(s)).toEqual(target);
  }); 
});