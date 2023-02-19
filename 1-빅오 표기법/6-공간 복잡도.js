// 1
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }

  return total;
};

// 2
const double = (arr) => {
  let newArr = 0;
  for (let i = 0; i <= arr.length; i++) {
    newArr.push(2 * arr[i]);
  }

  return newArr;
};
