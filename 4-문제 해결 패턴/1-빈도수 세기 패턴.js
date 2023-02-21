// 1

const firstSame = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i <= a.length; i++) {
    let value = b.indexOf(a[i] ** 2);
    if (value === -1) {
      return false;
    }

    b.splice(value, 1);
  }

  return true;
};

console.log(firstSame([1, 2, 3, 2], [9, 1, 4, 4]));

// 2

const secondSame = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let val of a) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  for (let val of b) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }

    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }

  return true;
};

console.log(secondSame([1, 2, 3, 2], [9, 1, 4, 4]));
