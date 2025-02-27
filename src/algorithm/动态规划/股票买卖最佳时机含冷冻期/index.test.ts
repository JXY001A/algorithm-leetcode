import { maxProfit} from './index';
describe('股票买卖最佳时机含冷冻期', () => {
    test("maxProfit 1", () => {
      expect(maxProfit( [1,2,3,0,2])).toBe(3);
    });

    test("maxProfit 2", () => {
        expect(maxProfit([1])).toBe(0);
    });
});
