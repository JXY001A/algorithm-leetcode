import {reverseStr} from './index';
describe("反转字符串II",()=>{

  test('reverseStr 1',()=>{
    expect(reverseStr("abcdefg",2)).toBe("bacdfeg");
  });

  test('reverseStr 2',()=>{
    expect(reverseStr("abcd",2)).toBe("bacd");
  });
});