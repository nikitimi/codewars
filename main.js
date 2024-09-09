function subPowerOf2(s, p) {
  let divisibleBy = 1;
  const arrayOfSubstrings = [];

  for (let x = 0; x < p; x++) {
    divisibleBy *= 2;
  }

  for (let x = 0; x < s.length; x++) {
    let substringIndex = 0;
    for (let y = x + 1; y < s.length + 1; y++) {
      const contiguousString = parseInt(s.substring(x, y), 10);

      if (contiguousString === 0 || contiguousString % divisibleBy === 0) {
        substringIndex += 1;
      }
    }
    arrayOfSubstrings.push(substringIndex);
  }

  return arrayOfSubstrings;
}
