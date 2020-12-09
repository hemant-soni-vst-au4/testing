import arrayAnalysis from '../src/arrayAnalysis';

const sampleArray = [7, 6, 4, 8, 2];

test('should return an object with correct average property', () => {
  expect(arrayAnalysis(sampleArray).average).toBe(5.4);
});

test('should return an object with correct min property', () => {
  expect(arrayAnalysis(sampleArray).min).toBe(2);
});

test('should return an object with correct max property', () => {
  expect(arrayAnalysis(sampleArray).max).toBe(8);
});

test('should return an object with correct length property', () => {
  expect(arrayAnalysis(sampleArray).length).toBe(5);
});