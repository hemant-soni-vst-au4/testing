import reverse from '../src/reverse';

it('reverse when string is lowercase', () => {
    expect(reverse('jail')).toBe('liaj');
  });
  
it('reverse when string has uppercase letters', () => {
    expect(reverse('PriSioNEr')).toBe('rENoiSirP');
});