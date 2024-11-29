function gcdOfStrings(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  const isDivisor = (l) => {
    if (len1 % l !== 0 || len2 % l !== 0) {
      return false;
    }
    const f1 = len1 / l;
    const f2 = len2 / l;
    const candidate = str1.slice(0, l);
    return candidate.repeat(f1) === str1 && candidate.repeat(f2) === str2;
  };

  for (let l = Math.min(len1, len2); l > 0; l--) {
    if (isDivisor(l)) {
      return str1.slice(0, l);
    }
  }
  return "";
}

gcdOfStrings("ABABAB","ABAB")