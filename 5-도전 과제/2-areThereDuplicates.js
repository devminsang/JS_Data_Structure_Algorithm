function areThereDuplicates() {
  const obj = {};

  for (let val of arguments) {
    if (obj[val] > 0) {
      return true;
    } else {
      obj[val] = 1;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
