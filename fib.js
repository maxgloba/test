const
  bigdecimal = require("bigdecimal"),
  fib = n => {
    let prev = 0n, next = 1n;
    for(let i = 0; i < n; i++){
      next = prev + next;
      prev = next - prev;
    }
    return prev;
  }

let
  i = 1,
  flag = true

while(flag){
  let
    n = i++,
    num = fib(n),
    numStr = num.toString()
  if(numStr.length === 1000){
    console.log(`The index with 1,000 digit sum is: ${n}`);
    console.log(`F${n} = ${num}`);
    flag = false;
  }
}