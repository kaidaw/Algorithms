function longestCommonPrefix(strs) {
  if (!strs.length) {
    return "";
  }
  let output = "";
  let firstWord = strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    for (let string of strs) {
      if (string[i] !== firstWord[i]) {
        return output;
      }
    }
    output = output + firstWord[i];
  }
  return output;
}
