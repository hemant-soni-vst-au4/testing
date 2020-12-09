function getEncryptedIndex(plainIndex, offset, isUpperCase) {
  const aIndex = isUpperCase ? 65 : 97;
  const zIndex = isUpperCase ? 90 : 122;

  let encryptedIndex = plainIndex + offset;

  while (encryptedIndex < aIndex) {
    encryptedIndex = zIndex - (aIndex - 1 - encryptedIndex);
  }

  while (encryptedIndex > zIndex) {
    encryptedIndex = aIndex + (encryptedIndex - (zIndex + 1));
  }

  return encryptedIndex;
}

function encryptLetter(letter, offset) {
  let isAlphabet = false;
  let isUpperCase = false;

  const charCode = letter.charCodeAt(0);

  if (charCode >= 65 && charCode <= 90) {
    isAlphabet = true;
    isUpperCase = true;
  } else if (charCode >= 97 && charCode <= 122) {
    isAlphabet = true;
    isUpperCase = false;
  } else {
    isAlphabet = false;
    isUpperCase = false;
  }

  if (isAlphabet) {
    const encryptedIndex = getEncryptedIndex(charCode, offset, isUpperCase);
    return String.fromCharCode(encryptedIndex);
  }
  return letter;
}

export default function caesarCipher(string, offset) {
  return [...string].map((letter) => encryptLetter(letter, offset)).join('');
}
