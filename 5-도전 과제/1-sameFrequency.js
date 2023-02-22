const sameFrequency = (a, b) => {
  const obj = {};

  if (a.length !== b.length) {
    return false;
  }

  for (val of String(a)) {
    if (obj[val]) {
      obj[val] += 1;
    } else {
      obj[val] = 1;
    }
  }

  for (val1 of String(b)) {
    if (obj[val1]) {
      obj[val1] -= 1;
    } else {
      return false;
    }
  }

  for (let i = 0; i < obj.length; i++) {
    if (obj[i] !== 0) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
