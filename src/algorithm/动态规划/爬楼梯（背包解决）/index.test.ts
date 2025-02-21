import { climbStairs } from "./index";

describe("爬楼梯的可能数",()=>{
	test("climbStairs 1", () => {
		expect(climbStairs(2)).toBe(2);
	}); 

	test("climbStairs 2", () => {
		expect(climbStairs(3)).toBe(4);
	}); 
});

