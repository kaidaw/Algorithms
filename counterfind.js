function counter() {
  let num = 0;
  function addOne() {
    return (num += 1);
  }

  function getCount() {
    return num;
  }
  function removeOne() {
    return (num -= 1);
  }
  return {
    addOne,
    getCount,
    removeOne,
  };
}

let mycounter = counter();
mycounter.addOne();
mycounter.addOne();
console.log(mycounter.getCount()); // 2
mycounter.removeOne();
console.log(mycounter.getCount()); // 1
