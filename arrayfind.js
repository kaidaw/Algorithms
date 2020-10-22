let testCase = [1, 3, 7, 9, 5];

function arrayFind(array, funct) {
  for (let each of array) {
    if (funct(each)) {
      return each;
    }
  }
}

let result = arrayFind(testCase, (entry) => {
  if (entry === 5) {
    return true;
  }
  return false;
});

console.log(result);
