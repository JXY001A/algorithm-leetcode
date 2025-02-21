import {coinChange } from './index';

describe("零钱兑换III",()=>{
	test("coinChange 1", () => {
		expect(coinChange([1, 2, 5],11)).toBe(3);
	}); 

	test("coinChange 2", () => {
		expect(coinChange([2],3)).toBe(-1);
	});
    
    test("coinChange 3", () => {
		expect(coinChange([1],-)).toBe(0);
	});

    test("coinChange 4", () => {
		expect(coinChange([1],1)).toBe(1);
	});

    test("coinChange 5", () => {
		expect(coinChange([1],2)).toBe(2);
	});
});