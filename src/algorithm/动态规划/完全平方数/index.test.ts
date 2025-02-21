import { numSquares } from "./index";

describe("完全平方数",()=>{
	test("numSquares 1", () => {
		expect(numSquares(12)).toBe(3);
	}); 

	test("numSquares 2", () => {
		expect(numSquares(13)).toBe(2);
	}); 
});

