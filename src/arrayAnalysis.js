const arrayAnalysis = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const object = {
    min: sorted[0],
    max: sorted[array.length - 1],
    length: array.length,
    average: (array.reduce((a, b) => a + b, 0)) / array.length,
  };
  return object;
};

export default arrayAnalysis;