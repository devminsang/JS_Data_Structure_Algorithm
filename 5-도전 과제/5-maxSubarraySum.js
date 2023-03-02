const maxSubarraySum = (arr, n) => {
  if (n > arr.length) {
    return null;
  }

  const answer = [];
  let i = 0;
  let j = 1;
  let cnt = 1;
  let temp = arr[0];

  while (j <= arr.length) {
    if (cnt === n) {
      cnt = 1;
      i++;
      j = i + 1;
      answer.push(temp);
      temp = arr[i];
    } else {
      temp += arr[j];
      j++;
      cnt++;
    }
  }

  return Math.max(...answer);
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
