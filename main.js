function subPowerOf2(s, p) {
  let divisibleBy = 1;
  const integerMaxLength = 15;
  const emptyString = "";

  const arrayOfSubstrings = [];

  const sToArray = [];
  let sCopy = s;

  for (let x = 0; x < p; x++) {
    divisibleBy *= 2;
  }

  while (sCopy.length > integerMaxLength || sCopy !== emptyString) {
    const strHolder = sCopy.substring(0, integerMaxLength);
    sCopy = sCopy.replace(strHolder, emptyString);
    sToArray.push(strHolder);
  }

  for (let x = 0; x < s.length; x++) {
    let substringIndex = 0;
    for (let y = x + 1; y < s.length + 1; y++) {
      let contiguousString;
      if (s.length > integerMaxLength) {
        contiguousString = sToArray[Math.floor(x / 15)].substring(x, y);
      } else {
        contiguousString = s.substring(x, y);
      }

      if (
        parseInt(contiguousString, 10) === 0 ||
        parseInt(contiguousString, 10) % divisibleBy === 0
      ) {
        substringIndex += 1;
      }
    }
    arrayOfSubstrings.push(substringIndex);
  }

  return arrayOfSubstrings;
}
