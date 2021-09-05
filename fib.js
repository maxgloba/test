const
  a = (1 + 5 ** 0.5) / 2,
  c = 5 ** 0.5,
  fib = n => a ** n / c

let
  i = 1,
  flag = true

while(flag){
  let
    n = i++,
    num = fib(n),
    numStr = num.toString()
  if(numStr.length === 1000 || n === 4782){
    console.log(`F${n} = ${num} - ${numStr.length}`);
    flag = false;
  }
}