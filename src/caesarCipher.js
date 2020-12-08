function rot13(str) {
  const lowered = str.toLowerCase();
  const arr = lowered.split('');

  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    let ascii = item.charCodeAt();

    if (item.match(/[a-z]/)) {
      if (ascii >= 97 && ascii <= 121) {
        ascii += 1;
      } else {
        ascii = 97;
      }
      arr1.push(ascii);
    } else {
      arr1.push(item.charCodeAt());
    }
  }

  for (let j = 0; j < arr1.length; j += 1) {
    const item2 = arr1[j];
    arr2.push(String.fromCharCode(item2));
  }

  const test = arr2.join('');

  return test;
}
export default rot13;