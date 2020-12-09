const arrayAnalysis = (numberArray) => {
  const average = numberArray.reduce((sum, cur) => sum + cur, 0) / numberArray.length;
  const min = numberArray.reduce((min, cur) => Math.min(min, cur));
  const max = numberArray.reduce((max, cur) => Math.max(max, cur));
  const { length } = numberArray;
  return {
    average, min, max, length,
  };
};

export default arrayAnalysis;