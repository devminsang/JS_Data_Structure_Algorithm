// 1
const sumFirst = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

console.log(sumFirst(5));

// 2
const sumSecond = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(sumSecond(5));

// 3. 코드 실행 시간 비교

let sf1 = performance.now();
sumFirst(1000000000);
let sf2 = performance.now();

let ss1 = performance.now();
sumSecond(1000000000);
let ss2 = performance.now();

console.log(`Sum First => ${(sf2 - sf1) / 1000} seconds.`);
console.log(`Sum Second => ${(ss2 - ss1) / 1000} seconds.`);
