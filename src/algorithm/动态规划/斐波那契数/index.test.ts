import { fibRecursion,fibDp,fibDpOptimize } from "./index";

test("斐波那契数1", () => {
  expect(fibRecursion(0)).toBe(0);
  expect(fibRecursion(1)).toBe(1);
  expect(fibRecursion(2)).toBe(1);
  expect(fibRecursion(3)).toBe(2);
  expect(fibRecursion(4)).toBe(3);
});

test("斐波那契数2", () => {
  expect(fibDp(0)).toBe(0);
  expect(fibDp(1)).toBe(1);
  expect(fibDp(2)).toBe(1);
  expect(fibDp(3)).toBe(2);
  expect(fibDp(4)).toBe(3);
});


test("斐波那契数3", () => {
  expect(fibDpOptimize(0)).toBe(0);
  expect(fibDpOptimize(1)).toBe(1);
  expect(fibDpOptimize(2)).toBe(1);
  expect(fibDpOptimize(3)).toBe(2);
  expect(fibDpOptimize(4)).toBe(3);
});
