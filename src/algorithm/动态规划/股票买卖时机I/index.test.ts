import { maxProfit} from './index';
describe('股票买卖时机I', () => {
    test("maxProfit 1", () => {
      expect(maxProfit([7,1,5,3,6,4])).toBe(5);
    });

    test("maxProfit 2", () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
      });
});
