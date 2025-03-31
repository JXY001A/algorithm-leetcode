import {reverseLeftWords} from './index';
describe("左旋转字符串",()=>{
  test('reverseLeftWords 1',()=>{
    expect(reverseLeftWords("abcdefg",2)).toBe("cdefgab");
  });

  test('reverseLeftWords 2',()=>{
    expect(reverseLeftWords("lrloseumgh",6)).toBe('umghlrlose');
  });
});