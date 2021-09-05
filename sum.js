const partitions = n => {
  var p = Array(n + 1).fill(0);
  p[0] = 1;
  for (i = 1; i <= n; ++i){
    var k = 1;
    while ((k * (3 * k - 1)) / 2 <= i){
      p[i] += (k % 2 != 0 ? 1 : -1) * p[i - (k * (3 * k - 1)) / 2];
      if (k > 0) {
        k *= -1;
      } else {
        k = 1 - k;
      }
    }
  }
  return p[n];
}
console.log( partitions(100) );