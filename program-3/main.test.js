// FILEPATH: /c:/Users/HemanandRamasamy/source/repos/codeathon-sep23/program-1/main.test.js

// Import the validateIPAddress function
const validateIPAddress = require('./main');

// Test suite for validateIPAddress function
describe('validateIPAddress', () => {
  // Test case 1: Test with a valid IP address
  it('should return true for input "192.168.0.1"', () => {
    expect(validateIPAddress('192.168.0.1')).toBe(true);
  });

  // Test case 2: Test with an invalid IP address (wrong number of segments)
  it('should return false for input "192.168.0"', () => {
    expect(validateIPAddress('192.168.0')).toBe(false);
  });

  // Test case 3: Test with an invalid IP address (out of range segment)
  it('should return false for input "192.168.0.256"', () => {
    expect(validateIPAddress('192.168.0.256')).toBe(false);
  });

  // Test case 4: Test with an invalid IP address (non-numeric segment)
  it('should return false for input "192.168.0.a"', () => {
    expect(validateIPAddress('192.168.0.a')).toBe(false);
  });

  // Test case 5: Test with an invalid IP address (leading zeros in segment)
  it('should return false for input "192.168.00.1"', () => {
    expect(validateIPAddress('192.168.00.1')).toBe(false);
  });
});