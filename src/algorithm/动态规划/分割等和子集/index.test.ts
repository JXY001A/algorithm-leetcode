import { canPartition,canPartitionPro } from './index';
describe('canPartition', () => {
    test("等和子集1", () => {
      expect(canPartition([1, 5, 11, 5])).toBe(true);
    });

    test("等和子集2", () => {
      expect(canPartition([1, 2, 3, 5])).toBe(false);
    });


    test("等和子集2", () => {
      expect(canPartition([1,5,10,6])).toBe(true);
    });
});

describe('canPartitionPro', () => {
    test("等和子集1", () => {
      expect(canPartitionPro([1, 5, 11, 5])).toBe(true);
    });

    test("等和子集2", () => {
      expect(canPartitionPro([1, 2, 3, 5])).toBe(false);
    });


    test("等和子集2", () => {
      expect(canPartitionPro([1,5,10,6])).toBe(true);
    });
});
