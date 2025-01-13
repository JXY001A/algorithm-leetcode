import {dailyTemperatures} from './每日温度';
describe("每日温度",()=>{
  test('test1',()=>{
    expect(dailyTemperatures([73, 74, 75, 71, 71, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  test('边界情况 - 单个温度', () => {
    expect(dailyTemperatures([30])).toEqual([0]);
  });

  test('温度持续下降', () => {
    expect(dailyTemperatures([90, 80, 70, 60, 50])).toEqual([0, 0, 0, 0, 0]);
  });

  test('温度持续上升', () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
  });

  test('相同温度', () => {
    expect(dailyTemperatures([70, 70, 70, 70])).toEqual([0, 0, 0, 0]);
  });
});