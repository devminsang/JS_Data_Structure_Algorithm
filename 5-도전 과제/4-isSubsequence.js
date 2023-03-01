const isSubsequence = (a, b) => {
  let cnt = 0;
  for (let i = 0; i < b.length; i++) {
    if (cnt < a.length) {
      if (a[cnt] === b[i]) {
        cnt++;
        continue;
      }
    }
  }

  if (cnt === a.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

