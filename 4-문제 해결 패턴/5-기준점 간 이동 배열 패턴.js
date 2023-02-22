// 1

const maxSumFirst = (arr, n) => {
  if (n > arr.length) {
    return null;
  }

  let maxSum = -Infinity;

  for (let i = 0; i < arr.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++);
    temp += arr[i + j];
  }
  if (temp > maxSum) {
    maxSum = temp;
  }

  return maxSum;
};

console.log(maxSumFirst([1, 2, 3, 4, 5, 6], 2));

// 2

const maxSumSecond = (arr, n) => {
  let maxSum = 0;
  let tempSum = 0;
  if (n > arr.length) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSumSecond([1, 2, 3, 4, 5, 6], 2));
