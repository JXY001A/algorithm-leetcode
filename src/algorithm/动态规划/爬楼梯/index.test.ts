import { climbStairs,climbStairsOptimize } from "./index";

test("爬楼梯", () => {
  expect(climbStairs(0)).toBe(0);
  expect(climbStairs(1)).toBe(1);
  expect(climbStairs(2)).toBe(2);
  expect(climbStairs(3)).toBe(3);
  expect(climbStairs(4)).toBe(5);
});

test("爬楼梯", () => {
  expect(climbStairsOptimize(0)).toBe(0);
  expect(climbStairsOptimize(1)).toBe(1);
  expect(climbStairsOptimize(2)).toBe(2);
  expect(climbStairsOptimize(3)).toBe(3);
  expect(climbStairsOptimize(4)).toBe(5);
});