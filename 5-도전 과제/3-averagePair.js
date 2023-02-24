const averagePair = (arr, avr) => {
  console.log(arr);
  if (arr.length === 0) {
    return false;
  }

  let left = 0;
  let right = 1;

  while (true) {
    if (arr[left] + arr[right] / 2 === avr) {
      return true;
    } else {
      if (right < arr.length - 1) {
        right++;
      } else {
        left++;
        right = left + 1;
      }
    }
    if (left === arr.length - 2 && right === arr.length - 1) {
      return false;
    }
  }
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
