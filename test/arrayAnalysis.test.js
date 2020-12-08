import arrayAnalysis from '../src/arrayAnalysis';

it('returns and object with data of a sorted array', () => {
  expect(arrayAnalysis([2, 4, 6, 8, 10, 12])).toEqual({
    average: 7, length: 6, max: 12, min: 2,
  });
});

it('returns and object with data of an unsorted array', () => {
  expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, length: 6, max: 8, min: 1,
  });
});