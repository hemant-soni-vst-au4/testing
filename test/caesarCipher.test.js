import caesarCipher from '../src/caesarCipher';

test('should return encrypted string, case sensitive', () => {
  expect(caesarCipher('The quick brown fox jumps over the lazy dog', 3)).toBe(
    'Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj',
  );
});

test('using huge offset', () => {
  expect(caesarCipher('The quick brown fox jumps over the lazy dog', 100)).toBe(
    'Pda mqeyg xnksj bkt fqilo kran pda hwvu zkc',
  );
});

test('using punctuation', () => {
  expect(
    caesarCipher('The quick brown fox, jumps ,over the, lazy dog', 8),
  ).toBe('Bpm ycqks jzwev nwf, rcuxa ,wdmz bpm, tihg lwo');
});