import {reverseWords,removeExtraSpaces} from './index';
describe("反转字符串测试",()=>{
  test('test1',()=>{
    const s = "the sky is blue";
    const target = "blue is sky the";
    expect(reverseWords(s)).toBe(target);
  })

  test('test2',()=>{
    const s = "a good   example";
    const target = "example good a";
    expect(reverseWords(s)).toBe(target);
  })

  test('test3',()=>{
    const s = "  hello world  ";
    const target = "world hello"
    expect(reverseWords(s)).toBe(target);
  })
});