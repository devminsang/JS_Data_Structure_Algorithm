const same = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  const count = {};

  for (val of a) {
    if (count[val]) {
      count[val] += 1;
    } else {
      count[val] = 1;
    }
  }

  for (val of b) {
    if (!count[val]) {
      return false;
    } else {
      count[val] -= 1;
    }
  }

  return true;
};

console.log(same("anagram", "nagaram"));
console.log(same("anagram", "aaagram"));
