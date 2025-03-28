import {evalRPN } from './index';
describe("逆波兰表达式求值",()=>{
  test('evalRPN 1',()=>{
    expect(evalRPN(["2","1","+","3","*"])).toBe(9);
  })

  test('evalRPN 2',()=>{
    expect(evalRPN(["4","13","5","/","+"])).toBe(6);
  })

  test('evalRPN 3',()=>{
    expect(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])).toBe(22);
  })
});