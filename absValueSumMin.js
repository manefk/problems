// array => number
function absValueSumMin(arr) {
  const isEven = arr.length % 2 === 0;
  return isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)];
}
