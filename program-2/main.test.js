const findMaxProfit = require('./main');

describe('findMaxProfit', () => {
  it('should return 655 for input [100,180,260,310,40,535,695]', () => {
    expect(findMaxProfit([100,180,260,310,40,535,695])).toBe(655);
  });

  it('should return 0 for input [100,90,80,70,60,50]', () => {
    expect(findMaxProfit([100,90,80,70,60,50])).toBe(0);
  });

  it('should return -1 for input [100,100,100,100,100,100]', () => {
    expect(findMaxProfit([100,100,100,100,100,100])).toBe(-1);
  });

  it('should return 0 for input [100]', () => {
    expect(findMaxProfit([100])).toBe(0);
  });

  it('should return -1 for input []', () => {
    expect(findMaxProfit([])).toBe(-1);
  });
});