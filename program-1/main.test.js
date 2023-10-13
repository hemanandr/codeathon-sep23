// Import the sortString function
const sortString = require('./main');

// Test suite for sortString function
describe('sortString', () => {
  // Test case 1: Test with a simple string
  it('should return "eetr" for input "tree"', () => {
    expect(sortString('tree')).toBe('eetr');
  });

  // Test case 2: Test with a string containing spaces
  it('should return "lloohe wrd" for input "hello world"', () => {
    expect(sortString('hello world')).toBe('lloohe wrd');
  });

  // Test case 3: Test with a string containing special characters
  it('should return "ccbbbaa!@#$%^&*()" for input "aabbcc!@#$%^&*()"', () => {
    expect(sortString('aabbcc!@#$%^&*()')).toBe('ccbbbaa!@#$%^&*()');
  });

  // Test case 4: Test with a string containing only one character
  it('should return "aaaaa" for input "aaaaa"', () => {
    expect(sortString('aaaaa')).toBe('aaaaa');
  });

  // Test case 5: Test with an empty string
  it('should return "" for input ""', () => {
    expect(sortString('')).toBe('');
  });
});