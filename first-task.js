function sumClosure(initialValue = 0) {
  let totalSum = initialValue;
  function innerFn(nextValue) {
    totalSum += nextValue;
    return innerFn;
  }

  innerFn.valueOf = () => totalSum;

  return innerFn;
}

let resultSumClosure = Number(sumClosure(2)(3)(5));

console.log("Сумма через замыкание => " + resultSumClosure);

function sumRecursive(value) {
  return function (nextValue) {
    if (nextValue === undefined) {
      return value;
    }
    return sumRecursive(value + nextValue);
  };
}
let resultSumRecursive = sumRecursive(1)(2)(3)(4)(5)();

console.log("Сумма через рекурсию  => " + resultSumRecursive);
