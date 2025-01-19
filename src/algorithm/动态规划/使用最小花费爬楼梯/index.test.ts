import { minCostClimbingStairs } from "./index";

describe("最小爬楼梯花费测试",()=>{
  test("使用最小花费爬楼梯1", () => {
    expect(minCostClimbingStairs([10,15,20])).toBe(15);
  });
  
  test("使用最小花费爬楼梯2", () => {
    expect(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])).toBe(6);
  });
  
  test("使用最小花费爬楼梯3", () => {
    expect(minCostClimbingStairs([0,1,2,2])).toBe(2);
  });
});

