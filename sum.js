console.log('How many ways exist to reach a sum of 100 using 2 or more positive integers?');

const partitions = n => {
  let p = Array(n + 1).fill(0);
  p[0] = 1;
  for (i = 1; i <= n; ++i){
    let k = 1;
    while ((k * (3 * k - 1)) / 2 <= i){
      p[i] += (k % 2 != 0 ? 1 : -1) * p[i - (k * (3 * k - 1)) / 2];
      if (k > 0) {
        k *= -1;
      } else {
        k = 1 - k;
      }
    }
  }
  return p[n] - 1;
}
console.log(`Answer: ${partitions(100)}`);