// 1
const sumZeroFirst = (arr) => {
  const result = [];

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        result.push([arr[i], arr[j]]);
      }
    }
  }

  return result;
};

console.log(sumZeroFirst([1, 2, 3, -3, -2, -1]));

// 2
const sumZeroSecond = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left !== right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZeroSecond([-3, -2, -1, 1, 2, 3]));
