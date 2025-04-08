import { trap } from './trap';

import { trap as trapDp } from './trap-dp';
import { trap as trapStack } from './trap-stack';
import {trap as trapDouble} from './doublePointerTrap'

describe('trap', () => {
  test('should return 6 for height [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  });

  test('should return 0 for height [0,0,0,0]', () => {
    expect(trap([0,0,0,0])).toBe(0);
  });

  test('should return 0 for height [1,1,1,1]', () => {
    expect(trap([1,1,1,1])).toBe(0);
  });

  test('should return 1 for height [2,0,2]', () => {
    expect(trap([2,0,2])).toBe(2);
  });

  test('should return 0 for height []', () => {
    expect(trap([])).toBe(0);
  });

  test('should return 9 for height [4,2,0,3,2,5]', () => {
    expect(trap([4,2,0,3,2,5])).toBe(9);
  });
});

describe('trapDp', () => {
  test('should return 6 for height [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trapDp([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  });

  test('should return 0 for height [0,0,0,0]', () => {
    expect(trapDp([0,0,0,0])).toBe(0);
  });

  test('should return 0 for height [1,1,1,1]', () => {
    expect(trapDp([1,1,1,1])).toBe(0);
  });

  test('should return 1 for height [2,0,2]', () => {
    expect(trapDp([2,0,2])).toBe(2);
  });

  test('should return 0 for height []', () => {
    expect(trapDp([])).toBe(0);
  });

  test('should return 9 for height [4,2,0,3,2,5]', () => {
    expect(trapDp([4,2,0,3,2,5])).toBe(9);
  });
});


describe('trapStack', () => {
  test('should return 6 for height [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trapStack([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  });

  test('should return 0 for height [0,0,0,0]', () => {
    expect(trapStack([0,0,0,0])).toBe(0);
  });

  test('should return 0 for height [1,1,1,1]', () => {
    expect(trapStack([1,1,1,1])).toBe(0);
  });

  test('should return 1 for height [2,0,2]', () => {
    expect(trapStack([2,0,2])).toBe(2);
  });

  test('should return 0 for height []', () => {
    expect(trapStack([])).toBe(0);
  });

  test('should return 9 for height [4,2,0,3,2,5]', () => {
    expect(trapStack([4,2,0,3,2,5])).toBe(9);
  });
});



describe('trapDouble', () => {
  test('should return 6 for height [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trapDouble([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
  });

  test('should return 0 for height [0,0,0,0]', () => {
    expect(trapDouble([0,0,0,0])).toBe(0);
  });

  test('should return 0 for height [1,1,1,1]', () => {
    expect(trapDouble([1,1,1,1])).toBe(0);
  });

  test('should return 1 for height [2,0,2]', () => {
    expect(trapDouble([2,0,2])).toBe(2);
  });

  test('should return 0 for height []', () => {
    expect(trapDouble([])).toBe(0);
  });

  test('should return 9 for height [4,2,0,3,2,5]', () => {
    expect(trapDouble([4,2,0,3,2,5])).toBe(9);
  });
});
