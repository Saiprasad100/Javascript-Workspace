const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial); // Expected output: 10
/*
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
*/