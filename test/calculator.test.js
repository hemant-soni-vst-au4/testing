import calculator from '../src/calculator';

it('make a sum', () => {
  expect(calculator.add(20, 10)).toBe(30);
});

it('make a substract', () => {
  expect(calculator.minus(900, 10)).toBe(890);
});

it('make a division', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

it('make a multiplication', () => {
  expect(calculator.multiply(90, 10)).toBe(900);
});