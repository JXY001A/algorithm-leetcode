import { integerBreak } from './index';
describe('integerBreak', () => {
  test("整数拆解", () => {
    expect(integerBreak(2)).toBe(1);
  });

  test("整数拆解", () => {
    expect(integerBreak(10)).toBe(36);
  });
});