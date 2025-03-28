import {isValid } from './index';
describe("有效的括号",()=>{
  test('isValid 1',()=>{
    expect(isValid("()")).toBe(true);
  })

  test('isValid 2',()=>{
    expect(isValid("()[]{}")).toBe(true);
  })

  test('isValid 3',()=>{
    expect(isValid("(]")).toBe(false);
  })

  test('isValid 4',()=>{
    expect(isValid("([])")).toBe(true);
  })
});