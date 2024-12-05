import {dailyTemperatures} from './每日温度';
describe("每日温度",()=>{
  test('test1',()=>{
    expect(dailyTemperatures([73, 74, 75, 71, 71, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  })

});