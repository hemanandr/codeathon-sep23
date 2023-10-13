// FILEPATH: /c:/Users/HemanandRamasamy/source/repos/codeathon-sep23/program-2/main.test.js

// Import the sortArray function
const sortArray = require('./main');

// Test suite for sortArray function
describe('sortArray', () => {
  // Test case 1: Test with an empty array
  it('should return an empty array for input []', () => {
    expect(sortArray([])).toEqual([]);
  });

  // Test case 2: Test with an array of one element
  it('should return the same array for input [1]', () => {
    expect(sortArray([1])).toEqual([1]);
  });

  // Test case 3: Test with an array of multiple elements
  it('should return the sorted array for input [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]', () => {
    expect(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });

  // Test case 4: Test with an array of negative numbers
  it('should return the sorted array for input [-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5]', () => {
    expect(sortArray([-3, -1, -4, -1, -5, -9, -2, -6, -5, -3, -5])).toEqual([-9, -6, -5, -5, -5, -4, -3, -3, -2, -1, -1]);
  });

  // Test case 5: Test with an array of mixed numbers
  it('should return the sorted array for input [3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5]', () => {
    expect(sortArray([3, -1, 4, -1, 5, -9, 2, 6, -5, 3, 5])).toEqual([-9, -5, -1, -1, 2, 3, 3, 4, 5, 5, 6]);
  });
});