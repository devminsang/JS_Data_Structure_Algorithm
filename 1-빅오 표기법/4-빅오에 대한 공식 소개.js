const countUpAndDown = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};

const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
