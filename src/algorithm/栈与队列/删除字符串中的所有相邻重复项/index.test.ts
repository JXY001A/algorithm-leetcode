import {removeDuplicates } from './index';
describe("删除字符串中的所有相邻重复项",()=>{
  test('removeDuplicates 1',()=>{
    expect(removeDuplicates("abbaca")).toBe('ca');
  })

  test('removeDuplicates 2',()=>{
    expect(removeDuplicates("azxxzy")).toBe('ay');
  })
});