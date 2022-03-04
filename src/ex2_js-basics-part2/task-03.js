function countEvenAndOddNum(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      if (arr[i] === 0) {
        zeroCount += 1;
      } else if (arr[i] % 2 === 0) {
        evenCount += 1;
      } else {
        oddCount += 1;
      }
    }
  }
  console.log(`[${evenCount}, ${oddCount}, ${zeroCount}]`);

  return [evenCount, oddCount, zeroCount];
}

module.exports = countEvenAndOddNum;
