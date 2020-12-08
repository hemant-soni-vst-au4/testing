import capitalize from '../src/capitalize';

it('capitalize when string is lowercase', () => {
    expect(capitalize('lion')).toBe('Lion');
});

it('capitalize when string is uppercase', () => {
    expect(capitalize('TURTLE')).toBe('Turtle');
  });