import { maxProfit} from './index';
describe('股票买卖时机IT', () => {
    test("maxProfit 1", () => {
      expect(maxProfit([7,1,5,3,6,4])).toBe(7);
    });

    test("maxProfit 2", () => {
        expect(maxProfit([1,2,3,4,5])).toBe(4);
    });

    test("maxProfit 3", () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });
});
