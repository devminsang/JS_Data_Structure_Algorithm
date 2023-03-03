// 1
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// 2
function countDown(num) {
  for (let i = num; i > 0; i--) {
    ocnsole.log(i);
  }

  console.log("All done!");
}

countDown(5);
