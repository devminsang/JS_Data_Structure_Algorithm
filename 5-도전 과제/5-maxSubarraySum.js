const maxSubarraySum = (arr, n) => {
  if (n > arr.length) {
    return null;
  }

  const answer = [];
  let i = 0;
  let j = 1;
  let cnt = 1;
  let temp = 0;

  while (j <= arr.length) {
    console.log(i, j);
    if (j < i + n) {
      temp += arr[j];
      j++;
    } else {
      i++;
      j = i + 1;
      answer.push(temp);
      temp = 0;
    }
  }

  console.log(answer);
};

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null
