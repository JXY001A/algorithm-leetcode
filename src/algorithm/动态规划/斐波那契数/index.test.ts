import { fibRecursion } from "./index";

test("斐波那契数", () => {
  expect(fibRecursion(0)).toBe(0);
  expect(fibRecursion(1)).toBe(1);
  expect(fibRecursion(2)).toBe(1);
  expect(fibRecursion(3)).toBe(2);
  expect(fibRecursion(4)).toBe(3);
});
