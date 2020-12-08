import rot13 from '../src/caesarCipher';

it('returns a string ciphered', () => {
    expect(rot13('abc')).toBe('bcd');
  });
  
  it('returns uppercased words', () => {
    expect(rot13('Adf')).toBe('beg');
  });
  
  it('returns uppercased words', () => {
    expect(rot13('Azf')).toBe('bag');
  });